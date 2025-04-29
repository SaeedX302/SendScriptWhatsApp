async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`

Bossi Ky
Mujhe ignore karke tu khud hi khud ko lose kar raha hai be

Tera attitude toh TikTok jaisa hai... kabhi bhi ban ho sakta hai

Main vo vibe hoon jo har kisi ko samajh nahi aati, aur tu toh zero IQ

Tere jaise logon ko toh Insta par block karna bhi time waste hai

Main woh goli hoon jo seedha dimaag pe lagti hai, dil pe nahi

Bhai tu cute nahi, bas kam dard deta hai... jokes jaisa lagta hai

Aukat mat dikhana, tera bio bhi maine likha hai

Swag meri fitrat hai, aur attitude toh upar se free ka mile bonus hai

Tu joh soch raha hai main vo kabhi sochti bhi nahi

Main toh queen hoon, tu sirf ek pending request

Log bolte hain badal gayi ho... bhai update toh aayega na

Tu toxic nahi, tu toh full bakwas ka trailer hai

Tere jaise logon ko toh follow back bhi karke lagta hai network issue hai

Dil ki baat kar... warna dimag ka toh main daily band bajati hoon

Main online hoon... par tere liye always Do Not Disturb mode mein

Mujhe tere jaison ka scene banana bhi sin lagta hai

Apna level itna high hai ki tera reach bhi nahi hoga

Tere jaise logon se toh Airplane mode mein bhi better vibes milti hain

Main sirf kisi ki nahi hoti... aur tere jaise ke toh dreams bhi nahi banti

Tere toh reel views bhi mere dp se jalte hain
Acha chutiya banaya... ab ja thoda rest le le, thak gaya hoga

Mujh tak pauhnchne ke liye tujhe wifi se zyada signal chahiye

Main share nahi hoti... aur tu toh status tak me limited feel hai

Main woh level hoon jahan teri thinking bhi nahi ja sakti

Jis din meri DP se tera dil toot gaya na... samajh lena main active thi

Tu toh uss naam ka bhi insult hai jiska Insta ID tune banaya

Mujhe screenshot le ke kya karega? wallpaper bhi main banne wali nahi

Main vo battery hoon jo sirf high-voltage logon ko charge karti hai

Tere jaison ko toh main typing mein bhi ignore kar deti hoon

Attitude toh itna hai ki agar main miss call doon... tera network hil jaaye

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
