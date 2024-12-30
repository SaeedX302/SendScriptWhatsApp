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
SHREK


SHREK
As promised. Now hand it over.sa

FARQUAAD
Very well, ogre. (holds out a piece 
of paper) The deed to your swamp, cleared 
out, as agreed. Take it and go before 
I change my mind. (Shrek takes the paper) 
Forgive me, Princess, for startling 
you, but you startled me, for I have 
never seen such a radiant beauty before. 
I'm Lord Farquaad.

FIONA
Lord Farquaad? Oh, no, no. (Farquaad 
snaps his fingers) Forgive me, my lord, 
for I was just saying a short... (Watches 
as Farquaad is lifted off his horse 
and set down in front of her. He comes 
to her waist.) farewell.

FARQUAAD
Oh, that is so sweet. You don't have 
to waste good manners on the ogre. It's 
not like it has feelings.

FIONA
No, you're right. It doesn't.

Donkey watches this exchange with a curious look on his face.


FARQUAAD
Princess Fiona, beautiful, fair, flawless 
Fiona. I ask your hand in marriage. 
Will you be the perfect bride for the 
perfect groom?

FIONA
Lord Farquaad, I accept. Nothing would 
make - -

FARQUAAD
(interrupting) Excellent! I'll start 
the plans, for tomorrow we wed!

FIONA
No! I mean, uh, why wait? Let's get 
married today before the sun sets.


FARQUAAD
Oh, anxious, are you? You're right. 
The sooner, the better. There's so much 
to do! There's the caterer, the cake, 
the band, the guest list. Captain, round 
up some guests! (a guard puts Fiona 
on the back of his horse)

FIONA
Fare-thee-well, ogre.

Farquaad's whole party begins to head back to DuLoc. Donkey watches 
them go.

DONKEY
Shrek, what are you doing? You're letting 
her get away.

SHREK
Yeah? So what?

DONKEY
Shrek, there's something about her you 
don't know. Look, I talked to her last 
night, She's - -

SHREK
I know you talked to her last night. 
You're great pals, aren't ya? Now, if 
you two are such good friends, why don't 
you follow her home?

DONKEY
Shrek, I - - I wanna go with you.

SHREK
I told you, didn't I? You're not coming 
home with me. I live alone! My swamp! 
Me! Nobody else! Understand? Nobody! 
Especially useless, pathetic, annoying, 
talking donkeys!

DONKEY
But I thought - -

SHREK
Yeah. You know what? You thought wrong! 
(stomps off)

DONKEY
Shrek.

Montage of different scenes. Shrek arriving back home. Fiona 
being fitted for the wedding dress. Donkey at a stream running 
into the dragon. Shrek cleaning up his house. Fiona eating dinner 
alone. Shrek eating dinner alone.

SHREK'S HOME

Shrek is eating dinner when he hears a sound outside. He goes 
outside to investigate.

SHREK
Donkey? (Donkey ignores him and continues 
with what he's doing.) What are you 
doing?

DONKEY
I would think, of all people, you would 
recognize a wall when you see one.


SHREK
Well, yeah. But the wall's supposed 
to go around my swamp, not through it.


DONKEY
It is around your half. See that's your 
half, and this is my half.

SHREK
Oh! Your half. Hmm.

DONKEY
Yes, my half. I helped rescue the princess. 
I did half the work. I get half the 
booty. Now hand me that big old rock, 
the one that looks like your head.


SHREK
Back off!

DONKEY
No, you back off.

SHREK
This is my swamp!

DONKEY
Our swamp.

SHREK
(grabs the tree branch Donkey is working 
with) Let go, Donkey!

DONKEY
You let go.

SHREK
Stubborn jackass!

DONKEY
Smelly ogre.

SHREK
Fine! (drops the tree branch and walks 
away)

DONKEY
Hey, hey, come back here. I'm not through 
with you yet.

SHREK
Well, I'm through with you.

DONKEY
Uh-uh. You know, with you it's always, 
"Me, me, me!" Well, guess what! Now 
it's my turn! So you just shut up and 
pay attention! You are mean to me. You 
insult me and you don't appreciate anything 
that I do! You're always pushing me 
around or pushing me away.

SHREK
Oh, yeah? Well, if I treated you so 
bad, how come you came back?

DONKEY
Because that's what friends do! They 
forgive each other!

SHREK
Oh, yeah. You're right, Donkey. I forgive 
you... for stabbin' me in the back! 
(goes into the outhouse and slams the 
door)

DONKEY
Ohh! You're so wrapped up in layers, 
onion boy, you're afraid of your own 
feelings.

SHREK
(os) Go away!

DONKEY
There you are , doing it again just 
like you did to Fiona. All she ever 
do was like you, maybe even love you.


SHREK
(os) Love me? She said I was ugly, a 
hideous creature. I heard the two of 
you talking.

DONKEY
She wasn't talkin' about you. She was 
talkin' about, uh, somebody else.


SHREK
(opens the door and comes out) She wasn't 
talking about me? Well, then who was 
she talking about?

DONKEY
Uh-uh, no way. I ain't saying anything. 
You don't wanna listen to me. Right? 
Right?

SHREK
Donkey!

DONKEY
No!

SHREK
Okay, look. I'm sorry, all right? (sigh) 
I'm sorry. I guess I am just a big, 
stupid, ugly ogre. Can you forgive me?


DONKEY
Hey, that's what friends are for, right?


SHREK
Right. Friends?

DONKEY
Friends.

SHREK
So, um, what did Fiona say about me?


DONKEY
What are you asking me for? Why don't 
you just go ask her?

SHREK
The wedding! We'll never make it in 
time.

DONKEY
Ha-ha-ha! Never fear, for where, there's 
a will, there's a way and I have a way. 
(whistles)

Suddenly the dragon arrives overhead and flies low enough so 
they can climb on.

SHREK
Donkey?

DONKEY
I guess it's just my animal magnetism.


They both laugh.

SHREK
Aw, come here, you. (gives Donkey a 
noogie)

DONKEY
All right, all right. Don't get all 
slobbery. No one likes a kiss ass. All 
right, hop on and hold on tight. I haven't 
had a chance to install the seat belts 
yet.

They climb aboard the dragon and she takes off for DuLoc.

DULOC - CHURCH

Fiona and Farquaad are getting married. The whole town is there. 
The prompter card guy holds up a card that says 'Revered Silence'.


PRIEST
People of DuLoc, we gather here today 
to bear witness to the union....

FIONA
(eyeing the setting sun) Um-

PRIEST
...of our new king...

FIONA
Excuse me. Could we just skip ahead 
to the "I do's"?

FARQUAAD
(chuckles and then motions to the priest 
to indulge Fiona) Go on.

COURTYARD

Some guards are milling around. Suddenly the dragon lands with 
a boom. The guards all take off running.

DONKEY
(to Dragon) Go ahead, HAVE SOME FUN. 
If we need you, I'll whistle. How about 
that? (she nods and goes after the guards) 
Shrek, wait, wait! Wait a minute! You 
wanna do this right, don't you?

SHREK
(at the Church door) What are you talking 
about?

DONKEY
There's a line you gotta wait for. The 
preacher's gonna say, "Speak now or 
forever hold your peace." That's when 
you say, "I object!"

SHREK
I don't have time for this!

DONKEY
Hey, wait. What are you doing? Listen 
to me! Look, you love this woman, don't 
you?

SHREK
Yes.

DONKEY
You wanna hold her?

SHREK
Yes.

DONKEY
Please her?

SHREK
Yes!

DONKEY
(singing James Brown style) Then you 
got to, got to try a little tenderness. 
(normal) The chicks love that romantic 
crap!

SHREK
All right! Cut it out. When does this 
guy say the line?

DONKEY
We gotta check it out.

INSIDE CHURCH

As the priest talks we see Donkey's shadow through one of the 
windows Shrek tosses him up so he can see.

PRIEST
And so, by the power vested in me...


Outside

SHREK
What do you see?

DONKEY
The whole town's in there.

Inside

PRIEST
I now pronounce you husband and wife...


Outside

DONKEY
They're at the altar.

Inside

PRIEST
...king and queen.

Outside

DONKEY
Mother Fletcher! He already said it.


SHREK
Oh, for the love of Pete!

He runs inside without catching Donkey, who hits the ground hard.


INSIDE CHURCH

SHREK
(running toward the alter) I object!


FIONA
Shrek?

The whole congregation gasps as they see Shrek.

FARQUAAD
Oh, now what does he want?

SHREK
(to congregation as he reaches the front 
of the Church) Hi, everyone. Havin' 
a good time, are ya? I love DuLoc, first 
of all. Very clean.

FIONA
What are you doing here?

SHREK
Really, it's rude enough being alive 
when no one wants you, but showing up 
uninvited to a wedding...

SHREK
Fiona! I need to talk to you.

FIONA
Oh, now you wanna talk? It's a little 
late for that, so if you'll excuse me 
- -

SHREK
But you can't marry him.

FIONA
And why not?

SHREK
Because- - Because he's just marring 
you so he can be king.

FARQUAAD
Outrageous! Fiona, don't listen to him.


SHREK
He's not your true love.

FIONA
And what do you know about true love?


SHREK
Well, I - - Uh - - I mean - -

FARQUAAD
Oh, this is precious. The ogee has fallen 
in love with the princess! Oh, good 
Lord. (laughs)

The prompter card guy holds up a card that says 'Laugh'. The 
whole congregation laughs.

FARQUAAD
An ogre and a princess!

FIONA
Shrek, is this true?

FARQUAAD
Who cares? It's preposterous! Fiona, 
my love, we're but a kiss away from 
our "happily ever after." Now kiss me! 
(puckers his lips and leans toward her, 
but she pulls back.)

FIONA
(looking at the setting sun) "By night 
one way, by day another." (to Shrek) 
I wanted to show you before.

She backs up and as the sun sets she changes into her ogre self. 
She gives Shrek a sheepish smile.

SHREK
Well, uh, that explains a lot. (Fiona 
smiles)

FARQUAAD
Ugh! It's disgusting! Guards! Guards! 
I order you to get that out of my sight 
now! Get them! Get them both!

The guards run in and separate Fiona and Shrek. Shrek fights 
them.

SHREK
No, no!

FIONA
Shrek!

FARQUAAD
This hocus-pocus alters nothing. This 
marriage is binding, and that makes 
me king! See? See?

FIONA
No, let go of me! Shrek!

SHREK
No!

FARQUAAD
Don't just stand there, you morons.


SHREK
Get out of my way! Fiona! Arrgh!

FARQUAAD
I'll make you regret the day we met. 
I'll see you drawn and quartered! You'll 
beg for death to save you!

FIONA
No, Shrek!

FARQUAAD
(hold a dagger to Fiona's throat) And 
as for you, my wife...

SHREK
Fiona!

FARQUAAD
I'll have you locked back in that tower 
for the rest of your days! I'm king!


Shrek manages to get a hand free and he whistles.

FARQUAAD
I will have order! I will have perfection! 
I will have - - (Donkey and the dragon 
show up and the dragon leans down and 
eats Farquaad) Aaaah! Aah!

DONKEY
All right. Nobody move. I got a dragon 
here, and I'm not afraid to use it. 
(The dragon roars.) I'm a donkey on 
the edge!

The dragon belches and Farquaad's crown flies out of her mouth 
and falls to the ground.

DONKEY
Celebrity marriages. They never last, 
do they?

The congregation cheers.

DONKEY
Go ahead, Shrek.

SHREK
Uh, Fiona?

FIONA
Yes, Shrek?

SHREK
I - - I love you.

FIONA
Really?

SHREK
Really, really.

FIONA
(smiles) I love you too.

Shrek and Fiona kiss. Thelonius takes one of the cards and writes 
'Awwww' on the back and then shows it to the congregation.


CONGREGATION
Aawww!

Suddenly the magic of the spell pulls Fiona away. She's lifted 
up into the air and she hovers there while the magic works around 
her.

WHISPERS
"Until you find true love's first kiss 
and then take love's true form. Take 
love's true form. Take love's true form."


Suddenly Fiona's eyes open wide. She's consumed by the spell 
and then is slowly lowered to the ground.

SHREK
(going over to her) Fiona? Fiona. Are 
you all right?

FIONA
(standing up, she's still an ogre) Well, 
yes. But I don't understand. I'm supposed 
to be beautiful.

SHREK
But you ARE beautiful.

They smile at each other.

DONKEY
(chuckles) I was hoping this would be 
a happy ending.

Shrek and Fiona kiss...and the kiss fades into...

THE SWAMP

...their wedding kiss. Shrek and Fiona are now married. 'I'm 
a Believer' by Smashmouth is played in the background. Shrek 
and Fiona break apart and run through the crowd to their awaiting 
carriage. Which is made of a giant onion. Fiona tosses her bouquet 
which both Cinderella and Snow White try to catch. But they end 
up getting into a cat fight and so the dragon catches the bouquet 
instead. The Gingerbread man has been mended somewhat and now 
has one leg and walks with a candy cane cane. Shrek and Fiona 
walk off as the rest of the guests party and Donkey takes over 
singing the song.

GINGERBREAD MAN
God bless us, every one.

DONKEY
(as he's done singing and we fade to 
black) Oh, that's funny. Oh. Oh. I can't 
breathe. I can't breathe.

THE END
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
