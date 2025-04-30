var story;
function getStory(name) {
    return{
        currentScene: "morning",
        morning: {
            title: "Chapter 1 - Good Morning",
            story: `You wake up to the sound of Adriana's singing. Your love is already up and about the apartment. You look outside the window, the sun hangs bright and golden, warm but not yet harsh. Today is an important day. It's your anniversary. You get out of bed and get started with your day.
                    <br><br>
                    <i> There's lots to do before going out! Make sure to do every part of your morning routine together before heading out.</i>`,
            buttonText: "Continue",
            choices: [
                {
                    choice: `<b>Grab a bite to eat!</b><br><p style="margin-left:25px;"><small>They say breakfast is the most important meal of the day!</small></p>`,
                    destination:'breakfast'
                },
                {
                    choice: `<b>Brush your teeth!</b><br><p style="margin-left:25px;"><small>Gotta keep that smile pearly white!</small></p>`,
                    destination: 'teeth'
                },
                {
                    choice: `<b>Get changed!</b><br><p style="margin-left:25px;"><small>You cant go out in your pajamas!</small></p>`,
                    destination: 'mirror'
                },
                {
                    choice: `<b>Head out together!</b><br><p style="margin-left:25px;"><small><b>This will proceed the story.</b></small></p>`,
                    destination: 'plan'
                }
            ]
        },
        breakfast: {
            title: "Fuel for the Day Ahead",
            story: `You make your way to the kitchen. The table is already set. You take a seat near your love, she looks at you with a gentle smile. <i>“Good morning sweetheart, breakfast is ready.”</i>
                    <br><br>
                    The sweet scent of breakfast hangs in the air as you get more comfortable in your seat. Steam rises from your tea as you reach for your mug. In front of you is a stack of heart-shaped pancakes, made especially for you. 
                    <br><br>
                    Adriana giggles, <i>“I hope you like them..”</i> 
                    <br><br>
                    You take your fork and slowly make your way through everything on your plate as she tells you about all the different dreams she had last night. Her eyes glitter as she tells you everything.
                    `,
            image:"breakfast.png",
            defaultDestination: 'morning',
            buttonText: "Yummy"
        },
        teeth: {
            title: "Fresh Breath",
            story: `You stand side-by-side at the bathroom sink, brushing your teeth in unison. Your love catches your eye in the mirror and grins, her mouth full of foam.`,
            image:"teeth.png",
            defaultDestination: 'morning',
            buttonText: "Continue"
        },
        mirror: {
            title: "Final Touches",
            story: `You pull on your shirt as Adriana adjusts her blouse in the mirror. She catches you staring and attempts a wink - but ends up blinking awkwardly instead, like she always does.
                    <br><br>
                    <i>"Cute,"</i> you chuckle, stepping closer to fix her collar. 
                    <br><br>
                    <i>“R-Really?”</i> she stammers, face flushing.
                    `,
            image:"mirror.png",
            defaultDestination: 'morning',
            buttonText: "Continue"
        },
        plan:{
            title: "Chapter 2 - Plan your Date!",
            story: `<i>Decide where the date is going to take place. Choose wisely!</i>`,
            buttonText: "Continue",
            choices: [
                {
                    choice: '<b>Visit the Aquarium</b><br><p style="margin-left:25px;"><small>You can already imagine holding hands while walking under the fishies together.</small></p>',
                    destination:'fisk'
                },
                {
                    choice: '<b>Visit the Botanical Gardens</b><br><p style="margin-left:25px;"><small>The weather is perfect to take a walk around some beautiful flower gardens with your beautiful wife.</small></p>',
                    destination: 'garden'
                }
            ]
        },
        fisk:{
            title: "At the Aquarium",
            story: `You are at the aquarium. Giant tanks stretch from floor to ceiling, filled with schools of all kinds of fish. You catch Adriana’s smile reflected in the glass.<br><br><i> Finish all the activities here before returning home. </i>`,
            buttonText: "Continue",
            choices: [
                {
                    choice: `<b>Watch the fish and sea creatures</b><br><p style="margin-left:25px;"><small>There's so many of them to look at!</small></p>`,
                    destination:'sea'
                },
                {
                    choice: `<b>Attend the dolphin show</b><br><p style="margin-left:25px;"><small>They're said to have bigger brains than humans...</small></p>`,
                    destination: 'dolphin'
                },
                {
                    choice: '<b>Visit the touch tank</b><br><p style="margin-left:25px;"><small>We get to touch the fisk... in the tank..</small></p>',
                    destination: 'tank'
                },
                {
                    choice: `<b>Return home</b><br><p style="margin-left:25px;"><small>After a long day out, exhausted after all the activities, both of you feel it's best to head home.<b> This will proceed the story.</b> </small></p>`,
                    destination: 'omw'
                }
            ]
        },
        sea:{
            title: "Fishies and Sea Creatures",
            story: `Hand in hand, you wander slowly from tank to tank. You and your love stand close, faces almost pressed to the glass, whispering guesses about each creature. Adriana points excitedly at two clownfish swimming alongside each other and exclaims <i>“Us!”</i>, you giggle and nod your head.`,
            buttonText: "Continue",
            image:"metal.png",
            defaultDestination: 'fisk'
        },
        dolphin:{
            title: "Dolphin Show!",
            story: `After exploring the indoor tanks, you both step outside to the open-air arena, where a dolphin show is already underway. You find seats close to the front and settle in as the trainers guide the dolphins through a series of playful tricks, from leaping through hoops to bouncing beach balls high into the air. Adriana watches with wide-eyed amusement, clapping excitedly after each trick. You can't help but smile, feeling the joy of the moment.`,
            buttonText: "Continue",
            defaultDestination: 'fisk',
        },
        tank:{
            title: "Fishies and Sea Creatures",
            story: `After some exploring, you and Adriana stumble upon the aquarium’s touch tank, filled with starfish, stingrays, and tiny crabs. An instructor nearby encourages visitors to gently touch the creatures, sharing little facts about their biology as you listen. Both of you lean in eagerly, smiling as you reach out to give the small creatures a careful pet.`,
            buttonText: "Continue",
            defaultDestination: 'fisk',
        },
        garden:{
            title: "At the Botanical Gardens",
            story: `You are at the Botanical Gardens. Bright blooms spill out of neatly arranged flower beds, painting the path with color. Adriana picks a fallen flower from the path and tucks it behind your ear with a smile. <br><br><i> Finish all the activities here before returning home. </i>`,
            buttonText: "Continue",
            choices: [
                {
                    choice: `<b> Stroll along winding garden paths </b><br><p style="margin-left:25px;"><small>Hopefully you don't get lost..</small></p>`,
                    destination:'path'
                },
                {
                    choice: `<b> Take a break from walking </b><br><p style="margin-left:25px;"><small>Adriana's legs are getting sore ;w;</small></p>`,
                    destination: 'bench'
                },
                {
                    choice: '<b> Visit the greenhouse </b><br><p style="margin-left:25px;"><small>Prepare for the humidity!!</small></p>',
                    destination: 'greenhouse'
                },
                {
                    choice: '<b> Have a picnic </b><br><p style="margin-left:25px;"><small>Yummy yum yum!</small></p>',
                    destination: 'picnic'
                },
                {
                    choice: `<b>Return home</b><br><p style="margin-left:25px;"><small>After a long day out, exhausted after all the activities, both of you feel it's best to head home.<b> This will proceed the story.</b> </small></p>`,
                    destination: 'omw'
                }
            ]
        },
        path:{
            title: "Taking a Stroll",
            story: `You and you love stroll slowly along the winding paths, hands clasped and swinging gently. Every few steps, you pause to admire a particularly beautiful bloom or a curious little butterfly, pointing it out to Adriana so she can notice it as well. `,
            buttonText: "Continue",
            defaultDestination: 'garden',
        },
        bench:{
            title: "Taking a Break",
            story: `As you wander along the path, the two of you spot a bench nestled beneath a cherry tree heavy with blossoms. You settle onto it, sinking into the shade of pink petals. A gentle breeze stirs the air, carrying the sweet scent of fresh blooms. You reach for Adriana’s hand and give it a soft squeeze. She smiles warmly.
            <br><br><i>“If I had a flower for every time I thought about you, it would be bigger than this whole garden!” </i>she says, grinning.
            <br><br>You've heard the line before, but you still can’t help smiling, heart light and happy.`,
            buttonText: "Continue",
            image:"metal.png",
            defaultDestination: 'garden'
            
        },
        greenhouse:{
            title: "The Greenhouse",
            story: `You reach the end of the path and find a greenhouse nestled ahead. Adriana pushes open the door and leads you inside, where a wave of warm, humid air washes over you. The scent of damp earth and sweet tropical blooms fills your lungs. Everywhere you look, you see exotic plants that you've never seen before. Towering greenery with wide, glossy leaves stretches up toward the misty glass ceiling. You share quiet smiles, both a little in awe of how wild it all feels.`,
            buttonText: "Continue",
            defaultDestination: 'garden',
        },
        picnic:{
            title: "Snack Break",
            story: `You find the perfect spot along the path and decide it’s the ideal place for a picnic. You and Adriana spread out a soft blanket under the shade of a blooming cherry blossom tree. From your backpack, you pull out containers filled with sandwiches, fresh fruit, and little treats. Birds chirp and flutter in the nearby branches, their songs weaving through the warm, quiet air as you both relax and munch happily on your snacks.`,
            buttonText: "Continue",
            image:"foood.png",
            defaultDestination: 'garden'
            
        },
        omw:{
            title: "On the way Home",
            story: `After enjoying the day out, you and Adriana are headed back home. As you’re both walking, you think about whether or not you should stop by somewhere that's along the way.<br><br><i> Is there anything you want to do before arriving home? </i>`,
            buttonText: "Continue",
            choices: [
                {
                    choice: '<b> Drop by a café </b><br><p style="margin-left:25px;"><small>Yayyyy delicious pastries!</small></p>',
                    destination:'cafe'
                },
                {
                    choice: '<b>Buy flowers</b><br><p style="margin-left:25px;"><small>A flower for a flower.</small></p>',
                    destination: 'flower'
                },
                {
                    choice: '<b> Go straight home </b><br><p style="margin-left:25px;"><small>No need to waste any more time.</small></p>',
                    destination: 'gohome'
                }
            ]
        },
        cafe:{
            title: "At the Café",
            story: `You spot a small, cozy café tucked into the corner of the street and suggest taking a short break. Adriana nods enthusiastically. Inside, the air smells like warm pastries and fresh coffee. You both order something sweet and make your way home.`,
            buttonText: "Continue",
            defaultDestination: 'gohome',
        },
        flower:{
            title: "The Greenhouse",
            story: `As you pass by a florist’s stand, Adriana pauses to admire a colorful display of fresh blooms. You watch her eyes dance over the flowers, then step forward and start picking a bouquet yourself—cheerful daisies, soft pink peonies, and a few sprigs of lavender for good measure. Adriana watches curiously as the vendor wraps them in brown paper and twine.
            <br><br>You turn and hand them to her with a quiet smile.
            <br><br><i>“For you.”</i>
            <br><br>She takes them gently, surprised and beaming.`,
            buttonText: "Continue",
            defaultDestination: 'gohome',
        },
        gohome:{
            title: "Home Sweet Home",
            story: `Turning the key to unlock the door, you make it back safely to your apartment. Adriana throws her shoes off and immediately changes into something more comfortable. You follow in her footsteps and change into a t-shirt and some sweats.
            <br><br>
            The soft hum of the city outside fades as you both settle in. Adriana flops onto the couch with a sigh of contentment, hugging a throw pillow to her chest. You join her, and for a moment, neither of you says anything—just enjoying the quiet after a perfect day.
            <br><br>
            The two of you sit close, scrolling through the photos you took today, laughing at the silly ones and smiling at the sweet moments you captured.Eventually, she rests her head on your shoulder. Her voice is soft when she says, <i>“Today was really special.” </i>You nod, feeling the same way.
            <br><br>
            Outside, the sky begins to turn a dusky pink. Inside, the room is filled with warmth, soft light, and the feeling that this day will be one you’ll both remember for a long time.
            <br><br>
            <b>Thank you for playing! ❤</b>`,
            buttonText: "Restart",
            defaultDestination: 'morning',
        },
    }
}

document.addEventListener('DOMContentLoaded', function(){
    var button = document.querySelector('#start-button')
    var content = document.querySelector('#content')
    button.addEventListener('click', function(){
        story = getStory(" ")
        renderScene()
    })
} )

function renderScene(){
    var text = "Next"
    var image = "";
    if (story[story.currentScene].image){
        image = "<img></img>"
    }
    if (story[story.currentScene].buttonText){
        text = story[story.currentScene].buttonText
    }
    content.innerHTML = `
    <div class="text">
        <h1>${story[story.currentScene].title}</h1>
        <p>${story[story.currentScene].story}</p>
    </div>
    <div class="img">${image}</div>
    ${getInputs()}
    <button id = "submit-button"> ${text} </button>
    `
    if (story[story.currentScene].image){
        document.querySelector("img").src = `./img/${story[story.currentScene].image}`
    }
    var button = document.querySelector("#submit-button");
    button.addEventListener('click', function(){
        getInputValue()
    })
}

function getInputValue() {
    var inputs = document.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < inputs.length; i++){
        if (inputs[i].checked){
            story.currentScene = inputs[i].getAttribute('data-destination')
            renderScene();
            return;
        }
    }
    story.currentScene = story[story.currentScene].defaultDestination
    renderScene()
}


function getInputs(){
    var input = ""
    if (!story[story.currentScene].choices){
        return " ";
    }
    for(var i = 0; i < story[story.currentScene].choices.length; i++){
        input +=`
        <div class="box">
            <input data-destination = ${story[story.currentScene].choices[i].destination} id = "radio${i}" type = "radio" name="choices">
            <label for "radio${i}">${story[story.currentScene].choices[i].choice}</label>
        </div>`
    }
    return input;
}


