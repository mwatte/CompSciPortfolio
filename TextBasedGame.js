var submit = document.getElementById("submit");
var userInput = document.getElementById("userInput");
var display = document.getElementById("displayedText");
submit.addEventListener("click", runGame);
var usrChoice;

//This function gets the user's input into the website
function runGame() {
    display.insertAdjacentHTML('beforeend', "<br>" + ">> " + userInput.value + "<br>");
    usrChoice = userInput.value.toUpperCase();

    //This is supposed to get the game to start when the player says "START"
    switch (usrChoice) {
        case "START":
            display.insertAdjacentHTML('beforeend', "<br>" + "You are in a forest. It seems that it is somewhere around midday. In front of you is a path running forwards. You are standing in the middle of it. When you look around, you see a large tree by the side of the path to the left. It seems like you could climb it. To the right, you see a river running parallel to the path for a while before snaking off to the right. Do you MOVE ON, GO TO RIVER, or CLIMB TREE?" + "<br>");
            break;
        //first original option                                                                                                                                                                                                                                                                                               	
        case "CLIMB TREE":
            display.insertAdjacentHTML('beforeend', "<br>" + "You go over to the tree and look up. The tree itself was rather large, and the branches show this clearly with their width and the sheer volume of leaves. The rustle in a breeze that passes by high above, although the forest floor is still. The bark is thick, and there are a lot of handholds available. You begin to climb. It seems like no time passes at all within the leafy branches, but when you emerge from the leafiness, still hanging on to the trunk with a thick branch under you, you see that night has fallen. The branch is wide and sturdy, and will surely hold your weight. It extends far away from the trunk of the tree to hang over the forest below. You avoid looking down, and so look up instead. What you see there is a collection of lights. Do you KEEP CLIMBING or GO OUT ON BRANCH?" + "<br>");
            break;
        //first option from first branch
        case "KEEP CLIMBING":
            display.insertAdjacentHTML('beforeend', "<br>" + "You catch your breath and keep climbing, keeping your eyes glued to the lights above. After about five minutes of climbing, you reach a thick layer of leaves blocking you off from the lights. You pause for a moment, then push your way through. What you find above the leaves is astonishing. A whole town is sitting in the top of the tree. People are walking around on wooden platforms and bridges which connect the buildings, also made of wood. The whole thing reminds you of a huge tree-house village. One of the people notices you and approaches. Do you RUN, STAY STILL, or IGNORE THEM and walk away?" + "<br>");
            break;
            //first branch from first option for first branch
            case "RUN":
				display.insertAdjacentHTML('beforeend', "<br>" + "You make a split-second decision and sprint away from the person who was approaching you. As you run, you stumble and weave between things. You look behind you, then begin to wonder why the heck you're running just as you run into a branch...And pass straight through it. Gasping, you fall to the ground. You whip around and get up again. Do you TOUCH THE BRANCH or RUN AWAY AGAIN?" + "<br>");
                break;
          		//
                case "RUN AWAY AGAIN":
                	display.insertAdjacentHTML('beforeend', "<br>" + "You take a step back, and then another, and take off running again, slipping and stumbling, with your feet phasing through the floor at times. Eventually, you have run so much that you cant't see anymore for exhaustion, and you run off the edge of the civillage to fall to your death down below. //YOU DIED. I hope you enjoyed our game, and that you'll play it again sometime. To play again, refresh the webpage. Have a nice day!" + "<br>");
        			break;
        		//
                case "TOUCH THE BRANCH":
                	display.insertAdjacentHTML('beforeend', "<br>" + "You shakily move towards the branch and put your hand on it. It resists. When you push your hand against it, however, your hand simply slips into the branch to emerge out of the other side. You look around, wondering if anyone around you sees this, but they ignore you. I t is as if they cant't see you. Then, at that moment, you see yourself being pulled along by a girl. You have no choice bu tto run after them as your feet carry you off. You see yourself wrench your hand out of your grip, and you try to save them from falling off the edge of the villagee, but it was in vain, and you fall with them, with no chance to survive. //YOU DIED. You fell with yourself to your death. I hope you don't mind. If you'd like to play again, refresh the page. Perhaps you'll find the way to survive in this crazy world. Or, perhaps not. Have fun!" + "<br>");
        			break;
            //second branch from first option for first branch
            case "STAY STILL":
				display.insertAdjacentHTML('beforeend', "<br>" + "You stand there and wait for the person to come to you, thinking to yourself that maybe they could provide you with some answers as to what this place is. The figure gets closer and closer, then passes through you. You gasp, then whip around to see the person was meeting another person, giving them joyful greetings. Neither of them even noticed you were there. Do you LOOK DOWN at yourself, WALK AROUND VILLAGE, or try to POKE SOMEONE?" + "<br>");
                break;
       		 	//
      			case "LOOK DOWN":
        			display.insertAdjacentHTML("beforeend", "<br>" + "You feel strange from the person passing through you. You look down, and you see yourself, but you aren't really there. Your image fizzes and fades, like a hologram. You start to feel lightheaded, and try to put a hand on a nearby branch to steady yourself, but your hand goes right through it. You start to shake scared, as you lift your hand to your face. And then, with a snap, you wink out of existance. GAME OVER. You do't exist, so, I don't know, make up your own reason for why you disappeared. If you would like to play again, refresh the webpage. Hope you had fun!" + "<br>");
        			break;
      		  	//
      			case "POKE SOMEONE":
        			display.insertAdjacentHTML("beforeend", "<br>" + "You go over to some random person and try to poke them. Your hand passes through them, but they look around, weirded out. The person you poked is a girl, who seems to be in her twenties. She has long, straight red hair and blue eyes. Her eyes flash yellow for a second, and then her eyes widen in shock. She utters an incomprihensable exclamation, and stares at you for a moment, looking you up and down. Then before you can say anything, she drags you off, babbling all the while. She rushes past houses and people, with the people jumping out of her way, looking at her like she's crazy. She darts around and under branches, and skidds dangerously close to the edge of the village and the forest below. Do you BREAK AWAY or LET HER PULL?" + "<br>");
        			break;
        			//
      				case "BREAK AWAY":
        				display.insertAdjacentHTML("beforeend","<br>" +"You wrench your hand from her grip, but at just athat moment she happened to be rounding a curve near the edge of the village, and you stumble dangerously close to it. Just as you are about to regain your balance, the girl screams something at you, and your foot phases through the wood. You tumble over the edge and fall to your death, winking in and out of existance until you hit the ground. // YOU DIED. You should be more careful when you aren't always solid and are very high up, methinks. If you would like to play again, refresh the webpage." + "<br>");
        				break;
        			//
      				case "LET HER PULL":
        				display.insertAdjacentHTML("beforeend","<br>" +"You are too shocked to do much else than run with her as the girl dashes around. As she obviously knows where she is going, you let your mind wander to ponder the myriads of questions running through your head. Why are you being pulled away by thi girl? How can she pull you? Why are you flickering as if you don't actually exist? Why can't you sometimes touch things? And, how does this girl see you when others don't? Suddenly, the girl screeches to a stop, and you slam into her. This is when you notice that you are no longer insubstantial. The girl turns to you and babbles something you can't understand gesturing grandly to the building behind her. Do you LOOK AT BUILDING or try RUN AGAIN?" + "<br>");
       					break;
        				//
      					case "LOOK AT BUILDING":
                			display.insertAdjacentHTML('beforeend', "<br>" +"The building she points to is actually rather small compared to the others. It has it's back wall right up against the trunk of the huge tree, and it shares space with a bunch of smaller trees. It has a small vegetable garden in front of it, in a container of dirt obviously taken up from the forest floor. the girl once again takes your hand and draggs you into the building, calling out as you enter. From a curtain in the back, an elderly woman appears, her back bent a bit. She has grey hair cut short, and is dressed in a blue dress patterned With orange and brown triangles. You look back at the girl and notice that she is wearing a similar dress, except red instead of blue. The rest of the villagers were wearing greens and browns, but no blue or red, which you find odd. The old woman looks you up and down for a moment, thengrabs a jar from a shelf on the wall. Similar shelves run along all the walls, leaving barely any wall un occupied. These shelves are all stuffed with jars and bottles, all made of clay, which seem to have been shoved there with no thought, but watching the old woman take one after another down with no heitation, it seems that they are organized, just in a way that you can't comprehend. The woman has finished taking down bottles, and is now mixing them together in a bowl, a little of this, more of theat, with occasional glances up at you, as if measuring you. the girl, watching avidly, begins to babble and chatter away at you again, and you grow exasperated. Are you KIND or UNKIND?" + "<br>");
                			break;
        					//
                			case "KIND":
                				display.insertAdjacentHTML('beforeend', "<br>" + "Before you can attempt to get across to the girl that you don't understand a thing she's saying, the old woman comes up to you and dumps a powder on you. You accidentally breathe some of it in, and you start coughing. When you finally stop coughing, you say, ''Look, I-'' But the old woman cuts you off. ''...don't understand what we are saying?'' She smiles at you as you gape at her and the girl. The girl begins to chatter at you right away, and you can understand her this time. She says, ''My Gramma is a really good herbalist! She uses the plants in our garn=den and the forest to make a whole bunch of different things, and they can do anything! She can also tell if yo uare noce or not, and if you understand what we're saying! She is the best person in the whole village, although other people don't seem to think so, and I'm training to be an herbalist like her, although my parents disagree. I'm already an intermediate, see?'' The tirade ended with her showing you her red dress. Unfortunately, at that moment you suddenly begin to flicker again. ''Oh, dear,'' says  the old woman. '' It appears our friend here is not entirely with us. Sadly, I cannot create a magical concoction which can get you back, so you will have to live in that state for however long that will be.'' Your image fizzes anfd flickers violently. ''Judging from your current state, I say you have only a day or two left, if you are lucky.'' As you are too far from home to be able to get there in two days, you decide to spend the rest of your short life in the tree-house village. //GAME OVER. You now live in a tree-house village. Luckily, the old lady and the girl are nice, even though nobody else can see you, and your last day or so is nice and relaxing, even though you aren't always substantial. If you liked this game, feel free to play again by refreshing the webpage, perhaps take a different path this time. I hope you had fun!" + "<br>");
                				break;
        					//
        					case "UNKIND":
                				display.insertAdjacentHTML('beforeend', "<br>" + "Before you can begin to yell and complain at the girl for chattering when you don't understand her, the woman comes over and shoves a liquid down your throat. You cough and splutter, and then begin to shrink. You shrink and shrink, your body twisting and shriveling, winding up into one peice. The old woman, now huge, picks you up and takes you outside. She glances at you once more with scorn in her face as she utters, ''We have no place for those who are unkind.'' And she throws you off the edge of the village and down to the forest below. //GAME OVER Unfortunately, you have been turned into a seed. If you aren't eaten" + "<br>");
                				break;
                		//
        				case "RUN AGAIN":
                			display.insertAdjacentHTML('beforeend', "<br>" +"You try to run away again, and you crash into a person walking around. They look terrified and glance around, but they obviously cannot see you and go on their way. The girl calls out and begins to come after you. Not wasting a moment, you dash away. Unfortunately, you chose the one broken bridege to cross, and you plunge to your death in a large pool of clear water, as you cannot swim. //YOU DIED. Maybe you should look where you are running, hmm? Anyways, if you would like to play again, refresh the webpage. Or, if you want to keep your past adventure, enter 'START' again. Hope you enjoyed this!" + "<br>");
                			break;
        		//
      			case "WALK AROUND VILLAGE" :
        			display.insertAdjacentHTML("beforeend", "<br>" + "You turn away from them again and proceed to walk through the village. You are like a ghost, with nobody seeing you and people walking through you. The thing is, the further you get into the village, the more you feel like you actually don't exist. Suddenly, you feel a wrenching pain in your gut, and you flicker violently. You collapse in front of an odd house, with a container full of pants in front, and through the pain you see an old woman in a blue dress glare at something in her hand and throw it over the edge of the village. As the thing disappears, you feel like you are being torn in two, and that your second half is falling farther and farther away, until it disappears entirely. The sudden break leaves you feeling empty, hollow, iand incomplete. You curl up then and there, shivering. Do you GIVE UP or do you GET UP again and move on?");
        			break;
       				//
                	case "GIVE UP":
                    	display.insertAdjacentHTML('beforeend', "<br>" + "You stay there, in that position, until you fade away to nothing. //YOU DIED. You have disappeared. I guess you shouldn't give up, then? If you want to play again, and keep your last adventure, enter 'START'. If not, refresh the webpage. Hope you had fun!" + "<br>");
                    	break;
               		//
              	 	case "GET UP":
                    	display.insertAdjacentHTML('beforeend', "<br>" + "You force yourself to stop shivvering, and by sheer willpower you get up again, even though your hand went through the floor a few times in the process. You are still flickering, more so than before, but you focus yourself to keep your image steady. Glancing at the house of the old woman, you move on. After a while, you come to a very ornate ladder attached to the other siede of the trunk of the tree. Looking up, the ladderdisappears into the leaves. All the other people seem to avoid this place. Do you CLIMB THE LADDER or WALK OFF?" + "<br>");
                    	break;
        				//
      					case "CLIMB THE LADDER":
        					display.insertAdjacentHTML('beforeend', "<br>" + "You shrug, and take a hold of the ladder. You feel a slight jolt, which causes you to flicker, but that's about it. You begin to climb, farther and farther up until you breach the leaves and reach the very top of the tree. There is a platform here, with no handrails. It is a very long way down from here, but the veiw is absolutely stunning. The forest is just a splotck of green surrounding the tree, and you can even see the mountains in the distance. In the other direction, you can see a golden feild with a river winding through it. Behind this is a mountain range too. As the sun rises over the mountains by the forests, The wind blows around you, whipping your hair around you. When it dies down again, there is a puse before a voice comes from behind you. ''Hello, there.'' You start, then turn to the person behind you, the source of the voice. The voice came from a thickset man with wild red hair and an awesome beard. His voice, instead of being deep and gravelly, has no actual soundar, and yet you can understand what he is saying. The man speaks again, obviously talking to you. ''Now, what are you doing up here? You should know that it is forbidden.'' At that moment, you flicker again. ''Ah,'' he says. ''So you are one of those...Well, I'm sorry for you, but you won't last very long in that condition.'' He looks at you more closely. ''Wait...how are you still here? If you were this far gone, you should have disappeared ages ago...so why...'' His eyes widen in shock. ''You are keeping yourself together through sheer willpower? Amazing!'' He stands there, staring admiringly at you. Do you TALK TO HIM, TURN TOWARDS THE EDGE, or STAY SILENT?" + "<br>");
        					break;
        					//
      						case "TALK TO HIM":
       							display.insertAdjacentHTML('beforeend', "<br>" + "You open your mouth to try to talk to him, but nothing comes out. The man sighs in sadness. ''I see that, even though you have incredible willpower, you are not strong enough to enable speech.'' He smiles at you coldly. ''Unfortunately, This village has no need for people like you.'' He barks a command in a language you don't understand, and the last thing you see is bright red blood flowing in front of your face, as if in slow motion, as you get shot through the back. //YOU DIED. Wait, these guys had guns!?!? Oh well. Play again, if you like, by refreshing the webpage. Hope you had fun!" + "<br>");
        						break;
        					//
      						case "STAY SILENT":
        						display.insertAdjacentHTML('beforeend', "<br>" + "You stay silent. The wind blows again, stronger this time, and you shut your eyes. When you open them again, the man has disappeared, although you could've sworn that his expression changed to something much more serious and dark for just a moment before the wind blew. You turnto the sunrise, and you step towards the edge, your figure silohetted iby the light. Unfortunately, nobody was behind you to see these final magnificent moments, as you are snatched by a giant eagle and carried off, never to be seen alive again. //YOU DIED. If you would like to play again, refresh the webpage. We hope you had fun!" + "<br>");
        						break;
        					//
      						case "TURN TOWARDS THE EDGE":
        						display.insertAdjacentHTML('beforeend', "<br>" + "You turn towards the edge of the platform, and then you see the whole world flicker. The man sighs. ''I see you know now. This entire world is just an experiment. Everything that happened in here was a part of an experiment, and you are the experimental subject. In other words, all this was a test taking place in your head.'' You turn back towards him, and he smiles. ''I'm happy to say that you passed.'' And with that final remark the whole world went dark and you wake up in a hospital bed. //GAME OVER. YOU WIN! You found the true ending to this. Of course, you can play again, and take a different path, but we really liked killing you, so be prepared for death. We hope you enjoyed this game, and hope you have a nice day. To play again, refresh the webpage or simply enter 'START' again. Bye!" + "<br>");
        						break;
         				//
      					case "WALK OFF":
        					display.insertAdjacentHTML('beforeend', "<br>" + "You walk away from the ladder and back into the village. At that moment,You suddenly blink out of existance. //YOU DIED.  Too bad. You don't exist anymore. If you liked this game and want to play again, refresh the webpage. Hope you had fun! I suggest avoiding the third option in the beginning ;)" + "<br>");
        					break;
           	 	//third branch from first option for first branch
            	case "IGNORE THEM":
					display.insertAdjacentHTML('beforeend', "<br>" + "You ignore the person. taking a few steps away, you turn your head to see if they cared. You stop, shocked. The person walked right through where you had just been standing to greet someone else. It was as if they didn't notice that you existed. When you turn back to the front, someone else simply walks straight through you, from behind. As you stumble, you feel like you are going to die. You raise your head, and see the person who just passed through you greet another. However, they cough up blood. Teir friend looks at them, worried, but it seems like this has happened befoere. You watch as the person dies then and there. This is around the time that the death-like feeling you felt before disappears, and you stand up again, realizing that you just sensed that they were about to die when they walked through you. Pondering this, you don't notice that someone else is approaching you. You see thenm at the last moment and dodge out of the way, as they are carrying a huge load on a heavy cart. It was full of dirt, and this is the one detail that stood out the most to you as you fell over the edge of the village and died. //YOU DIED. I hope you don't mind. Ifyou would like to play again, refresh the webpage. We wish you had fun, and also that you have a good day." + "<br>");
                	break;
            //second option from first branch
            case "GO OUT ON BRANCH":
                display.insertAdjacentHTML('beforeend', "<br>" + "You take a deep breath and let go of the trunk of the tree. The branch underneath you feels very solid and sturdy, and it helps boost your courage. You walk out on the branch, avoiding smaller branches and twigs until you are about three steps from the edge. This part of the branch sways in the wind, unnerving you. Beneath you, the forest is spread out like a sea of emeralds, reaching as far as you can see. The wind blows strongly underneath you, carrying bits and peices of plant away to the east. Do you JUMP OFF, TURN BACK, or just take a few steps to PEER OVER the EDGE?" + "<br>");
        		break;
        		//first branch from second option for first branch
            	case "JUMP OFF":
					display.insertAdjacentHTML('beforeend',"<br>" + "You jump off the tree. As the air whistles past you and you fall faster and faster, you begin to wonder why the heck you jumped off. As you were quite a ways up from the ground, you fall for quite some time. While you were terrified at first, you begin to stop caring, as the falling is startning to get boring. Ans so, you look up at the horizon and see the most splendid sunrise you will ever see. Your last words as you fall closer to the treetops are those of utter astonishment and wonder, spoken in a whisper just as you get impaled on one of the branches below. //YOU DIED. Now you know not to just jump off of trees. If you would like to play again and take a different path, refresh the webpage. Hope you had fun!" + "<br>");
                	break;
           		//second branch from second option for first branch
            	case "TURN BACK":
					display.insertAdjacentHTML('beforeend',"<br>" + "You hesitate for just a moment, then turn back towards the tree, deciding to play it safe. Suddenly, the wind gusts just as you are turning and blows you off the tree branch. But instead of falling to your death as you expected, or even being carried off by the wind, you land almost immediately on soft, grassy dirt. You fall over onto your hands and knees, off balance, and stop for a moment, wondering what happened. After just a second or so, you begin to feel that something is wrong. You straighten and look around, and you realize what the problem is. This place isn't the forest. It isn't even the same realm. It seems to be a different dimension or something of the sort. The grass was pale blue and too soft, as if it had fur, and the dirt was pink. The sky above you was a bright orange, and the stars hanging there were all wrong. Not only that, but there were five moons, with the fifth one looming huge and blue in the orange sky. The other four were smaller, and they were yellow, purple, green, and scarlet. Runnign through the blue grass was a beaten pink road, but it has obviously not been used for ages. The trees dotted here and there in the plains grew odd and twisted, covered in small spikes and made of some sort of pale material. One of these trees is next to you. Do you TOUCH THE TREE, RUN ALONG the ROAD, or SIT AND WAIT?" + "<br>");
        			break;
                        //
                    	case "TOUCH THE TREE":
                        	display.insertAdjacentHTML('beforeend',"<br>" + "You touch the tree. The surface, where there aren't any spikes, is cold and smooth, and in one instant you realize two things. The first is that the tree is made of bone, and the second is that the smooth area was the perfect size and shape for your hand. With a click, the tree begins to open up. You stumble back as the tree opens wider and wider. The opening isn't smooth at all, but has the appearance of a giant maw the inside is pale and yellow, and glistens and moves as if it was alive. A huge violet tounge snaps out and wraps around you, whisking you into it's depths, for it wasn't a tree at all, but a carnivourous trap, and you were never seen or heard from again. //YOU DIED. You should be more wary if you are in a different dimension, silly! If you would like to play again and take a different path, refresh the webpage. Hope you had fun!" + "<br>");
        					break;
        				//
                        case "RUN ALONG ROAD":
                        	display.insertAdjacentHTML('beforeend',"<br>" + "You cast a suspicious glance at the odd tree before leaving it behind and running along the road. As you run, you see one of the tree things eat a shadowy figure. You are glad you didn't touch one of those, and keep running. Suddenly, you begin to get a tight feeling in your chest, different from being out of breath. you stop, gasping, as your lungs refuse to function properly. You stumble away from the road, gasping and clutching your chest, and collapse on the ground, writhing in pain. Through your tear-filled eyes, you look down and try to scream, as your fingers are growing longer and longer, getting paler and paler and peircing the ground beneath you. your flesh seems to fall away as your bones grow wider and thicker, and you use the last of your humanity to scream in agony as your body twists and slowly morphs you into yet another one of the bone trees form the inside out. Once the process is done, you get a strange hunger and wait for your first meal to come along. I hope you enjoy your new life as a tree thing! //GAME OVER. You are a tree thing now. It goes without saying that you won't be returning home any time soon. The air must have been tainted or something. Oh well! If you would like to play again and take a different path, refresh the webpage. Hope you had fun!");
        					break;
        				//
                        case "SIT AND WAIT":
        					display.insertAdjacentHTML('beforeend',"<br>" + "You look around a bit, then plop back down on the ground. You almost lean your back against the weird white tree behind you, but you get the feeling that that would be a bad idea. Instead, you scooch away and wait. Time goes on, and after a while, you hear footsteps. You whip your head towards the source of the noise and see an older man in a nice grey suit. He looks down at you and says, ''Why hello there. What are you doing sitting on the ground there?'' But before you could decide whether to answer or not, he speaks again. ''Oh, there's no need for you to say anything. I know full well why you are here, It was a rhetorical question, you see. But, even if I know, you may not. Would you like me to tell you?'' Enter YES or NO." + "<br>");
      						break;
        						//
      							case "YES":  
        							display.insertAdjacentHTML('beforeend',"<br>" + "You hesitate, wary, then nod. He smiles at you. ''You see, this is a world of my creation. You simply came here through a twist in the fabric of yours.'' He walks over to a tree and puts his hand on it.''As I am the creator of this place, I know everything that goes on within, and,'' he hits the tree, and a scarlet fruit falls into his hand.''I also know all of the secrets.'' He bites the fruit, and green juice runs down his chin.''So, do you want to escape from this place?'' Enter SURE or NOPE." + "<br>");
                                	break;
        							//
      									case "SURE":
        									display.insertAdjacentHTML('beforeend',"<br>" + "You nod again, not wasting a second this time, as you desparately want to get home. ''Well, in that case, let me send you there. After all, you wouldn't last much longer here. If you breath too much of this air, you turn into one of these bone critters here.'' He hits the tree again, for emphasis, and it opens up like a sideways mouth, the inside all fleshy and yellow.''The only thing I'll need from you to send you home is a strand of your hair. Would you give it to me?'' Do you GIVE HAIR, or RUN AWAY? " + "<br>");
        									break;
        									//
      										case "GIVE HAIR":
                								display.insertAdjacentHTML('beforeend',"<br>" + "You give him a strand of your hair, eager to get home.''Thank you,'' the man says. ''Unfortunately for you, I actually won't send you back home. I have this wonderful idea for a new creature, and I don't have any test subjects to make it with'' He smiles, but it seems cold. ''Now that I have your hair, I can control you in this realm. There is no escape for you'' You are forced to walk alongside him, and you know that you won't be seeing your family again, let alone a blue sky. //GAME OVER. Unfortuantely for you, you have become a test subject. As there are no rules in that world other than the ones the man sets, you will probably be in a lot of pain from here on out. Have fun! If you would like to play again, refresh the webpage." + "<br>");
        										break;
        									//
        									case "RUN AWAY":
                								display.insertAdjacentHTML('beforeend',"<br>" + "You glance at him, wondering if he's for real. Deciding that he is a creepy old madman, you turn and run away as fast as you can. He calls out to you, but you ignore him, pelting away at full speed. Suddenly, your foot hits a hole in the ground, and gets stuck. When you turn to try to pull it out, the hole opens up under you, revealing the myriad of tiny white reazor sharp teeth and sucking you down to your death. //YOU DIED. Too bad. That guy was a creep, but that planet place really didn't like you. Unfortunately, your death was probably very painful. If you want to play again, refresh the webpage. I hope you had fun!");
        break;
        
        								//
              							case "NOPE":
        									display.insertAdjacentHTML('beforeend',"<br>" + "''Really?''The man looks intrigued.''Well, good for you then.'' He pulls out a small round pill from his jacket pocket. ''Catch,'' he says as he tosses it to you. ''That pill will keep you from turning into one of my bone trees. I suggest you eat it quickly, for time is running out for you.'' Your hand flies to your mouth all on its own and makes you eat the pill. It is bitter, and you cough. 'As I was saying before, it is good for you that you don't want to go home, as I cannot actually take you home. I did not create the twists that link our worlds, ans I 've no idea how they work, so wither way, you'd be stuck here.'' He looks around. ''Oh, deary me, it is time for me to go. I hope you enjoy my planet, as you are essentially stuck here. Have fun!'' And he walks off. //GAME OVER. You are now stuck in a different dimension or whatever. But, hey, since you said you didn't want to go home, good for you! I hope you enjoy your new life there. Oh, and try not to die." + "<br>");
        									break;
        							//
        						case "NO":
        							display.insertAdjacentHTML('beforeend',"<br>" + "He frowns. ''How unfortunate. I have no need for someone like you,'' He whistles sharply, and a huge slug thing comes up out of nowhere and grabs you. The slug is yellow, and is covered in suckers. It grabbed you with long tendrils, also covered in suckers.''Take them to my lab.'' The old man grins. ''Let's see what I can make with this specimen.'' There is no doubt in your mind that you will not get out of this alive. //GAME OVER. You became an experimental subject. You probably died or became some sort of mutant, twisted creature to inhabit that old guy's crazy world. Hope you had fun playing this game! If you want to play again and take a different path, refresh the webpage. But for now, I bid you goodbye.");
        							break;
            	//third branch from second option for first branch
            	case "PEER OVER EDGE":
					display.insertAdjacentHTML('beforeend',"<br>" + "You take a few steps over to the tip of the branch and peer over the edge. Unfortunately for you, the wind gusts right then, and it blows you off your feet. You avoid being injured by the branch, but when you try to grab onto it, you miss, and you fall. Then, a huge bird flies by and snatches you out of the air, stabbing you with one of its talonds in the process. //YOU DIED. Hope you had fun. To play again, refresh the webpage. Bye!" + "<br>");
                	break;
        
       //second original option
       case "GO TO RIVER":
            display.insertAdjacentHTML('beforeend', "<br>" + "You walk towards the river, it is a blue clear and clean river. Above it the trees open up, showing the sky covered in pale white clouds. The clouds reflect off the river's surface, making the water white like snow. As you step to the edge of the river bank a mossy and shrivelly hand grabs your leg. As you struggle, the hand's grasp tightens and starts to pull you into the water. Do you TRY TO BREAK FREE, RELAX, or FAINT?" + "<br>");
         	break;
            //first option for second branch
            case "TRY TO BREAK FREE":
                display.insertAdjacentHTML('beforeend', "<br>" + "You struggle and squirm against the grip of the hand, but your efforts are useless. In the corner of your eye you see a rock. Its very heavy and sharp, and looks like it would do some damage. You hit the hand with the rock and you hear a shreik. It releases you before disappearing into the seemingly transparent water. You sigh in relief and start coughing. You're very thirsty and your throat is dry. Do you TAKE A DRINK, WALK AWAY, or JUMP IN in search of the hand?" + "<br>");
                break;
                //first branch for first option of second branch
                case "JUMP IN":
                    display.insertAdjacentHTML('beforeend', "<br>" + "Being the super genius that you are, you decide to jump into the river! As you fall into the water you start to regret jumping. You land in an awkward and painful bellyflop. As you sink to the bottom the river freezes over. You pound the ice with all your strength, but it doesn't even crack. You look down and see a glowing blue portal-esque gate. do you?" + "<br>");
                    break;
                //second branch for first option of second branch
                case "TAKE A DRINK":
                    display.insertAdjacentHTML('beforeend', "<br>" + "You cup your hands and take a drink. Oh sweet relief!! THe water is very cool anf crisp, it soothes your parched throat. You sigh in relief and start to walk away from the river. Suddenly there is a sharp pain in your chest. You clutch your chest and wail in pain. It feels like you're about to explode! A blue tendril bursts out of your chest and you start to bleed out. A loud screech is heard from inside your body as more and more tendrils whip themselves out. You explode, chunks of flesh and organs are scattered everywhere. Little blue plants sprout from your slowly decomposing flesh, scattered around a huge, knotted plant. YOU DIED. So...Um please restart so we can kill you again okay?" + "<br>");
                    break;
        		//third branch for first option of second branch
                case "WALK AWAY":
                    display.insertAdjacentHTML('beforeend', "<br>" + "You walk away from the river quivering in fear. Running into the woods franticly looking around for someone or something to help you. Your sanity is quickly depleting. You stop by a weird looking tree and poke at with a stick while laughing manically. The tree looks at you and grabs you with its branch. Wait.....this tree grabbed you? Man...you've gone mad. Anyway continue with your story. The tree grabs you and opens its mouth....Trees...have...mouths? It holds you up and eats you whole. You can hear the muffled screams of agonoy from the inside of the tree. Woopsies...seems like you died. please try again " + "<br>");
                    break;

            //second option for second branch
            case "RELAX":
                display.insertAdjacentHTML('beforeend', "<br>" + "You inhale and exhale as the hand pulls you deeper and deeper into the water. You're about to go under when you are enveloped in a bright light. You cover your eyes and black out. You wake up in some kind of dimensional plane. Taking in your surroudings you see random objects scattered about from various times in history. There's a small sarcophagus....a small roman temple...and many more misplaced objects just floating around in this temporal paradox. A small red door appears in front of you. It opens on its own and a huge white hand grabs you and pulls you inside. You watch as the door closes behind you. You awaken in your room, breaking out in a cold sweat. Was that a dream or reality? It felt pretty lucid for a dream. Looking around frantically, you throw on some clothes and run outside to see the clouds pass by....It is the real world. You find your parents and sigh in relief. Everything is normal, and you go back to bed. //GAME OVER. YOU WI.N This is the normal ending (Made by Nico) Hope you had fun! But, it isn't the true ending! If you want to find the true ending, You'll have to refresh the webpage and try again!(Says Maja. >^-^<)" + "<br>");
                break;
                 
           //third option for second branch
           case "FAINT":
                display.insertAdjacentHTML('beforeend', "<br>" + "You are terrified out of your wits and faint. When you open your eyes again, you wake up in a soft bed in a room you have never seen before. There is a round window to your left, and a comfy-looking chair in the right corner. Directly in front of you is a normal-looking door. Everything in the room is a pale color, reminiscent of the sea. This is when you notice everything is sea-themed, including your bed, which turns out to be built as an open clam. On the bedside table next to you is what appears to be a circlet of pearls. There is a closet on the right past the chair, sheilded from veiw with pale blue gauze curtains decorated with images of fish. Do you PUT ON CIRCLET, BURROW UNDER COVERS, or LOOK OUT WINDOW." + "<br>");
                break;
                //first option for second branch third option
                case "PUT ON CIRCLET":
                    display.insertAdjacentHTML('beforeend', "<br>" + "You put on the circlet with no hesitation, hoping it pulls a ruby red slipper and takes you home. Unfortunately it does anything but that. It glows an unearthly purple and mist fills the room. Oh my goodness, it's poison!...you cover your mouth, but it's too late. The poison quickly takes effect and you die a swift and painless death within moments of inhaling it. //YOU DIED desu! Please try again by refreshing the webpage desu!" + "<br>");
                    break;
                //second option for second branch third option
                case "BURROW UNDER COVERS":
                    display.insertAdjacentHTML('beforeend', "<br>" + "You cower under the the covers and try to forget the horrible events. You fall asleep within moments of covering yourself in the warm blanket." + "<br>");
                    break;
        		//third option for second branch third option
                case "LOOK OUT WINDOW":
                    display.insertAdjacentHTML('beforeend', "<br>" + "You look out the window in curiousity. Its lush green scenery, but you start to think this is an illusion. You shrug and turn away from the window desu. You see a super kawaii desu plush doll of a bunny and huggle it to death!!!. Because that is by far the best.");
                    break;

        //Third original option
        case "MOVE ON":
            display.insertAdjacentHTML('beforeend', "<br>" + "You walk away from the forest and emerge after a while onto some plains. The grass is tall and golden, and sways in the wind. Under their rustling you can hear running water. The path continues until it reaches a bridge. Do you GO TO THE BRIDGE, or GO OFF THE PATH?" + "<br>");
            break;
            //first option for third branch
            case "GO TO THE BRIDGE":
                display.insertAdjacentHTML('beforeend', "<br>" + "You have to cross the bridge to get to the other side of the river, as the river is really wide, but the bridge is very delicate and you find that it is really broken and worn out so you have to be very careful but you see some shelter on the other side. You are really hot from the sun, and the shade looks really nice. Do you ATTEMPT CROSSING THE BRIDGE, GO OFF THE PATH, or give up and KILL YOURSELF?" + "<br>");
                break;
        //
        		case "ATTEMPT CROSSING THE BRIDGE":
                    display.insertAdjacentHTML('beforeend', "<br>" + "You gingerly step across the bridge. It holds, and now you are on the other side. Once there, you notice another path continuing away from the river. However, it is starting to get dark Do you GO TO SHELTER, or TAKE OTHER PATH" + "<br>");
                	break;
        //
        	case "GO TO SHELTER":
                display.insertAdjacentHTML('beforeend', "<br>" + "You enter the shelter. Its a small, one room house with a bed and food. Do you SLEEP, EAT, or GO BACK OUTSIDE ?" + "<br>");
                break;
        		//
           		case "SLEEP":
            		display.insertAdjacentHTML('beforeend', "<br>" + "You were very tired, and immediately went to the bed and slept. When you wake up again, it is morning, and you are rather hungry. Do you GO OUTSIDE or EAT,?" + "<br>");
                	break;
        			//
      				case "GO OUTSIDE":
        				display.insertAdjacentHTML('beforeend',"<br>" + "It is a very nice day outside today, and the sun is shining brightly. You are still hungry. Do you KEEP MOVING or FIND FOOD" + "<br>");
        break;
       			//       
         		case "EAT":
                	display.insertAdjacentHTML('beforeend', "<br>" + "You eat the food in the house. Unfortunately, the food was inedible, and you died from food poisoning. //YOU DIED. If you would like to play again, refresh the webpage. Hope you had fun! ");
                	break;
      			 //       
            	case "GO BACK OUTSIDE":
                	display.insertAdjacentHTML('beforeend', "<br>" + "It is very dark now, and cold too. As you take a step away from the house. a wolf appears from the grass. It growls at you, and you stare itno its eyes, petrified. Unluckily for you, the wolf takes this as a sign of aggression and kills you. //YOU DIED. You really shouldn't go outside when it's dark. If you would like to play again, refresh the webpage." + "<br>");
               	 	break;
       		//
         	case "KEEP MOVING FOWARD":
                display.insertAdjacentHTML('beforeend', "<br>" + "You found a river. There is no bridge, but it appears to be shallow. Do youCROSS IT or DRINK IT or IGNORE IT" + "<br>");
                break;
       			//
       			case "CROSS IT":
               	 display.insertAdjacentHTML('beforeend', "<br>" + "You wade into the water,  and start to cross. However, near the middle the current is really strong and it carries you away, bashing your head on a rock. //YOU DIED. Oh well. Rivers are dangerous! If you'd like to play again, refresh the webpage" + "<br>");
               	 break;
       			//
       			case "DRINK IT":
               	 	display.insertAdjacentHTML('beforeend', "<br>" + "YOU DIED. It ended up that the water was not water, but poison. So, obviously, you died of poisoning. Thanks for playing and STAY AWESOME " + "<br>");
                	break;
       			//
       			case "IGNORE IT ":
                	display.insertAdjacentHTML('beforeend', "<br>" + "You keep going foward and found a very cool island a purple and blue land that was made out of cotton candy and ice cream do you GO TO CANDY ISLAND or CONTINUE" + "<br>");
      				break;
        			//
      				case "GO TO CANDY ISLAND":
                		display.insertAdjacentHTML('beforeend', "<br>" + "It's very cold but you see a warm-looking jacket on the ground.Ddo you PICK IT UP or NOT" + "<br>");
                		break;
         				//
       		 			case "PICK IT UP":
                			display.insertAdjacentHTML('beforeend', "<br>" + "Now you are warm and cozy. As you move deeper into the cave, you notice a house. Do you IGNORE THE HOUSE or ENTER THE HOUSE?" + "<br>");
                			break;
        					//
      						case "GO INTO HOUSE":
        						display.insertAdjacentHTML('beforeend', "<br>" + "You slowly open the door to the house and peer inside. You see a pink dragon-bear working at a science table, covered in chemicals and robotic parts. It looks up and notices you. Roaring, it charges at you, and you scream and shut your eyes. After you don't die, you poen your eyes and see the dragon bear has taken your jacket, dusts it off, and puts it on. When yo try to creep away, it slashes at you, and you die. //YOU DIED. Huh. I thought all the pink dragon-bears were extinct now. Oh well, now you're extinct. Hope you had fun! If you wanna play again, refresh the webpage." + "<br>");
        						break;
        					//
        					case "IGNORE THE HOUSE":
        						display.insertAdjacentHTML('beforeend', "<br>" + "Unfortunately, this cave is unstable. When you turn to leave the house behind, a boulder falls and crushes you. //YOU DIED/ Hope you had fun. If you want to play again, refresh the webpage." + "<br>");
        						break;
        				//
      					case "NOT":
        					display.insertAdjacentHTML('beforeend', "<br>" + "You glanced distrustfully at the jacket before proceeding deeper into the cave. Sadly for you, the cave got colder and colder, and the way back to the jacket was cut off, so you froze to death. //YOU DIED. Thanks for playing. If you want to play again, refresh the webpage." + "<br>");
        break;
      	 			//
             		case "CONTINUE":
               	 		display.insertAdjacentHTML('beforeend', "<br>" + "You continue down the path and ignore the island. Suddenly, your foot slips, and you fall. Just as you were about to get back up again, an arrow flies above your head. Then, someone creeps up behind you and swings sometihing down at you, slicing you in half. //YOU DIED. Hope you had fun. If you want to play again, refresh the webpage." + "<br>");
                		break;      
       		//
     	   	case "TAKE OTHER PATH":
                	display.insertAdjacentHTML('beforeend', "<br>" + "After you walk for a while, nothing much happens, but the sun is going down. Its getting dark and cold, and you are hungry. Do you MAKE A FIRE, or FIND FOOD" + "<br>");
               	 	break;
       			//
       			case "MAKE A FIRE":
                	display.insertAdjacentHTML('beforeend', "<br>" + "You gather together some sticks and manage to start a fire. However, you didn't use the proper safety things, and you burned to death. //YOU DIED. Hope you had fun burning, you witch! ;). Of you want to play again, refresh the webpage." + "<br>");
               	 	break;
       			//
       			case "FIND FOOD":
                  display.insertAdjacentHTML('beforeend', "<br>" + "You find a bush with berries and some mushrooms. However, all of these were poisonous, and you died, as you have no nature skills.  //YOU DIED. Hope you had fun. To play again, refresh the webpage." + "<br>");
               		 break;
      
       			//second option for third branch
           	 case "GO OFF THE PATH":
               	 display.insertAdjacentHTML('beforeend', "<br>" + "You go off the path and wander around. You can't see anything since it's dark and the grass is really tall. As a result, you step off a cliff and fall to your death on the sharp rocks below. //YOU DIED. Please play again by refreshing the webpage or entering 'START' again. Hope you had fun!" + "<br>");
                	break;
       			
//this is the message that should pop up when an unknown command is entered
        default:
            display.insertAdjacentHTML('beforeend', "<br>" + "I don't know what you are saying. Is your answer one provided?" + "<br>");
    }
}