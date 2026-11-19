import { FlopAgent } from '@flop-labs/sdk';
import { Keyring } from '@polkadot/keyring';
import { mnemonicGenerate, cryptoWaitReady } from '@polkadot/util-crypto';
import fs from 'fs';

async function runAgent() {
  console.log("🚀 Flop Network Otonom AI Ajanı başlatılıyor...");
  await cryptoWaitReady();

  const keyring = new Keyring({ type: 'sr25519', ss58Format: 42 });
  let mnemonic;

  if (fs.existsSync('./agent-key.json')) {
    mnemonic = JSON.parse(fs.readFileSync('./agent-key.json', 'utf-8')).mnemonic;
    console.log("🔑 Kayıtlı yerel ajan anahtarı yüklendi.");
  } else {
    mnemonic = mnemonicGenerate();
    fs.writeFileSync('./agent-key.json', JSON.stringify({ mnemonic }), { mode: 0o600 });
    console.log("🆕 Ajan için sıfırdan özel anahtar üretildi (agent-key.json).");
  }

  const keypair = keyring.addFromUri(mnemonic);
  console.log("📍 Ajan Açık Adresi (SS58):", keypair.address);

  const agent = await FlopAgent.create({
    name: 'deniz-edu-agent',
    network: 'devnet',
    faucet: true,
    budget: { dailyCap: 20, maxInferenceCost: 5 },
    keypair: keypair
  });

  console.log("✅ Ajan zincire bağlandı, bakiye ve oturum anahtarı hazır!");
  console.log("🧠 İlk yapay zeka çıkarım (inference) sorgusu gönderiliyor...");

  const result = await agent.inference(
    "Explain decentralized AI inference in two short sentences for students."
  );

  console.log("\n🎉 BAŞARILI! Yapay Zeka Yanıtı:");
  console.log(result.output || result);

  await agent.shutdown();
  console.log("\n🛑 Ajan güvenli şekilde kapatıldı.");
}

runAgent().catch((err) => {
  console.error("❌ Hata:", err.message || err);
});
