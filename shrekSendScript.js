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
I
I L
I Lo
I Lov
I Love
I Love Y
I Love Yo
I Love You 
I Love You B
I Love You Ba
I Love You Bab
I Love You Babl
I Love You Babli
I Love You 1
I Love You 2
I Love You 3
I Love You 4
I Love You 5
I Love You 6
I Love You 7
I Love You 8
I Love You 9
I Love You 10
I Love You 11
I Love You 12
I Love You 13
I Love You 14
I Love You 15
I Love You 16
I Love You 17
I Love You 18
I Love You 19
I Love You 20
I Love You 21
I Love You 22
I Love You 23
I Love You 24
I Love You 25
I Love You 26
I Love You 27
I Love You 28
I Love You 29
I Love You 30
I Love You 31
I Love You 32
I Love You 33
I Love You 34
I Love You 35
I Love You 36
I Love You 37
I Love You 38
I Love You 39
I Love You 40
I Love You 41
I Love You 42
I Love You 43
I Love You 44
I Love You 45
I Love You 46
I Love You 47
I Love You 48
I Love You 49
I Love You 50
I Love You 51
I Love You 52
I Love You 53
I Love You 54
I Love You 55
I Love You 56
I Love You 57
I Love You 58
I Love You 59
I Love You 60
I Love You 61
I Love You 62
I Love You 63
I Love You 64
I Love You 65
I Love You 66
I Love You 67
I Love You 68
I Love You 69
I Love You 70
I Love You 71
I Love You 72
I Love You 73
I Love You 74
I Love You 75
I Love You 76
I Love You 77
I Love You 78
I Love You 79
I Love You 80
I Love You 81
I Love You 82
I Love You 83
I Love You 84
I Love You 85
I Love You 86
I Love You 87
I Love You 88
I Love You 89
I Love You 90
I Love You 91
I Love You 92
I Love You 93
I Love You 94
I Love You 95
I Love You 96
I Love You 97
I Love You 98
I Love You 99
I Love You Babli 99
I Love You Babli 100
I Love You Babli 101
I Love You Babli 102
I Love You Babli 103
I Love You Babli 104
I Love You Babli 105
I Love You Babli 106
I Love You Babli 107
I Love You Babli 108
I Love You Babli 109
I Love You Babli 110
I Love You Babli 111
I Love You Babli 112
I Love You Babli 113
I Love You Babli 114
I Love You Babli 115
I Love You Babli 116
I Love You Babli 117
I Love You Babli 118
I Love You Babli 119
I Love You Babli 120
I Love You Babli 121
I Love You Babli 122
I Love You Babli 123
I Love You Babli 124
I Love You Babli 125
I Love You Babli 126
I Love You Babli 127
I Love You Babli 128
I Love You Babli 129
I Love You Babli 130
I Love You Babli 131
I Love You Babli 132
I Love You Babli 133
I Love You Babli 134
I Love You Babli 135
I Love You Babli 136
I Love You Babli 137
I Love You Babli 138
I Love You Babli 139
I Love You Babli 140
I Love You Babli 141
I Love You Babli 142
I Love You Babli 143
I Love You Babli 144
I Love You Babli 145
I Love You Babli 146
I Love You Babli 147
I Love You Babli 148
I Love You Babli 149
I Love You Babli 150

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
