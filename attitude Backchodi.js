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

1. Your Smile  
2. Your Hair  
3. Your Laugh  
4. Your One Dimple  
5. Your Lips  
6. Your Humor  
7. Your Eyes  
8. The Way you carry yourself  
9. Confidence  
10. Beautiful  
11. Gorgeous  
12. Pretty  
13. Smart  
14. Funny  
15. Your Loyalty  
16. Your Passion  
17. Your Strength  
18. Your Honesty  
19. Your Energy  
20. Your Voice  
21. You Supporting me  
22. Your Creativity  
23. Unique  
24. Your ability to make me laugh when I'm sad  
25. Your Big Heart  
26. Your Warmth  
27. Your Style  
28. Your Charm  
29. Your Positive Energy  
30. Your Patience  
31. Your Courage  
32. Hardworking  
33. Your Forgiving Heart  
34. Your Warm Hugs  
35. Your Caring  
36. Gentle  
37. My Motivation  
38. Your Love for Niko  
39. Your Presence  
40. Intelligent  
41. Your Thoughtfulness  
42. Your Love  
43. Your Curiosity  
44. Your Appreciation  
45. Your Soul  
46. Your Teasing  
47. Your Belief in me  
48. Your Humble  
49. Amazing  
50. Your Playful  
51. Your Outgoing  
52. Your Natural Beauty  
53. Your Snorts When you Laugh  
54. Your Love for your Family  
55. Your Humility  
56. Your Playful Side  
57. You Remember our good moments  
58. Your Touch  
59. Your Taste in Music  
60. Your Trustworthiness  
61. Your Understanding  
62. Your Dedication to your Goal  
63. Your Passion for what you love  
64. Your Warmth  
65. Your Compliments  
66. Your Little Jokes  
67. Your Trust in God  
68. Your Respect  
69. Your Charm  
70. Your Grace  
71. Your Reassurance  
72. Your Attention  
73. Your Beliefs  
74. You don't judge me  
75. Our Connection  
76. Our Bond  
77. You Never go on your phone when we're together  
78. Your Shyness  
79. Your Curiosity  
80. Your Self Love  
81. Your Self Care  
82. Your Growth  
83. Your Clinginess  
84. Your Effort  
85. You make me feel warm  
86. Your Kisses  
87. Your Skin  
88. Your Silliness  
89. Your Selflessness  
90. Your Family  
91. Your Flaws  
92. Your Maturity  
93. Your Accountability  
94. Your Teeth  
95. Your Advice  
96. Your Manners  
97. Your Seriousness  
98. Your Love  
99. Your Cuteness  
100. You made me become a better person  
101. Your Charming  
102. You're Responsible  
103. Your Forgiveness  
104. You're Entertaining  
105. Your Scent  
106. Your Natural Scent  
107. You're Affectionate  
108. You're Perfect  
109. You're Loving  
110. You're Worthy  
111. You go out of your way for me  
112. Your Body  
113. Your Calmness  
114. Your Existence  
115. You're Sweet  
116. You're Brave  
117. You're Clever  
118. You have such a sweet Soul  
119. You're Fragile  
120. Your Inner Child  
121. You make me feel safe  
122. You bring out the little me  
123. Your Wisdom  
124. You Notice small things about me  
125. You're Generous  
126. You're Proud  
127. You Never Doubt me  
128. You're Giving  
129. You're Energetic  
130. Your Talent  
131. You're a Gift From God  
132. You were my World  
133. You were who I Prayed For  
134. You Pray For me  
135. You're Encouraging  
136. Your Excitement  
137. The Way you look at me  
138. The things I’ve learned from you  
139. Your Commitment  
140. You're So Special  
141. You're an Angel  
142. You're Outstanding  
143. Your Politeness  
144. You're Adorable  
145. You Being You  
146. Your Affection  
147. Our First Date  
148. Your Actions  
149. You, When you look at me  
150. You With Glasses  
151. You Without Glasses  
152. You Without Braces  
153. Your Jokes  
154. Your Soft Comforting Voice  
155. You Never give up  
156. Our Late Night Talks  
157. Your Snoring  
158. Your Sleeping  
159. Our Cuddles  
160. Team Awesome Sauce  
161. You're Adventurous  
162. You made me feel Important  
163. You did Everything for me  
164. Your Piercings  
165. Your Playfulness  
166. Your Words of Affirmation  
167. You know everything about me  
168. Always there for me when I need it  
169. Your Cooking  
170. Your Seriousness  
171. You're Wonderful  
172. You're Cool  
173. Your Accomplishments  
174. Your Gestures  
175. Your Welcoming  
176. You're Inspiring  
177. Your Sacrifices for me  
178. You changed me in a good way  
179. You're Loving me while knowing all my past mistakes  
180. You give me many chances  
181. Loved me through everything  
182. Your Ego  
183. Your Words  
184. Your Comfort  
185. Your Company  
186. Your Concern for me  
187. Love your Exploring & Going to new places  
188. You're the best thing that ever happened to me  
189. You're Careful  
190. Your Acceptance  
191. You're Incredible  
192. Your Calmness  
193. You're Polite  
194. You're Adorable  
195. You are Genius  
196. Your Kindness to others  
197. Your Courage  
198. YOU  
199. YOU + You  
200. Everything You  


`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
