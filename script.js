import Hyperbeam from "https://unpkg.com/@hyperbeam/iframe@latest/dist/index.js"
const resp = await fetch("/computer")
const data = await resp.json()
const hb = await Hyperbeam(cloudComputerDiv, data.embed_url, {kiosk: true})
hb.tabs.update({ url: "https://discord.com/app" })