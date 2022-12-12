import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

import '../About/About.css'

const About = () => {
    return (
    <div>
    <Navbar />
    <div class='about'>
        <h1>About our Workout Aplication</h1>
        <p>This aplication was created to help everyone that is beggining to train or already trains.</p>
        <p>Here you will learn about some possible training divisions, as well, explanations on how to execute the exercises, and which muscle they are for.</p>
        <p>There is some training templates made for you to begin your training.</p>
        <h1>About the benefits of Strenght Training</h1>
        <h3 class='mental-title'> - Mental Benefits:</h3>
        <ol class='mental-list'>
        <li>Eases Depression</li>
        <p>A meta-analysis of 33 clinical trials, totaling 1877 subjects, concluded that resistance training significantly reduced depressive symptoms among adults. More in-depth analysis showed that these mental health benefits were more pronounced for people performing low-to-moderate intensity strength training. In addition, people with mild-to-moderate depression seemed to reap the most benefits.</p>
        <li>Reduces Anxiety</li>
        <p>It releases feel-good endorphins that boost your humor and reduces anxiety.</p>
        <li>Raises Self-Esteem</li>
        <p>It gives confidence, since each session you are able to run faster, longer or lift heavier weights. Also makes you gain muscle, lose fat and water retetion, therefor making you look better.</p>
        <li>Helps Cognitive Function</li>
        <p>Studies suggest that, in older adults, resistance training can improve and delay the decline in memory, attention and decision making. One clinical trial, entitled the SMART (Study of Mental and Resistance Training) study, analyzed people with mild cognitive impairment, a syndrome where there is a slight but noticeable decline in cognitive abilities. Compared to brain training alone, resistance training combined with brain training led to improved cognitive function, with benefits maintained for 18 months afterward.</p>
        </ol>
        <h3 class='physical-title'> - Physical Benefits:</h3>
        <ol class='physical-list'>
        <li>Bone Strengthening</li>
        <p>Strength training is crucial for bone development. Weight-bearing exercises put temporary stress on your bones, sending a message to bone-building cells to take action and rebuild bones stronger. Having strong bones reduces your risk of osteoporosis, fractures, and falls, especially as you age.</p>
        <li>Greater Mobility and Flexibility</li>
        <p>Strength training increases joint range of motion (ROM), allowing for greater mobility and flexibility. Plus, those with weaker muscles tend to have lower ROM and flexibility. For best results, utilize your full movement potential around a joint. For example, lower yourself into a squat as far as you are able to go without compromising your form.</p>
        <li>Increases your Insulin Sensitivity</li>
        <p>Strength training may lower your risk of developing diabetes and can help those with the condition manage it better.</p>
        <li>Improves Heart Health</li>
        <p>Multiple studies have shown that regular strength-training exercise can decrease blood pressure, lower total and LDL (bad) cholesterol, and improve blood circulation by strengthening the heart and blood vessels.</p>
        <li>Lesser Risk of Injury</li>
        <p>Strength training helps improve the strength, range of motion, and mobility of your muscles, ligaments, and tendons. This can reinforce strength around major joints like your knees, hips, and ankles to provide additional protection against injury. In fact, one review including 7,738 athletes found strength-training programs reduced the risk of injury by 33%. It was found to lower the risk of injury in a dose-dependent manner, meaning for every 10% increase in strength-training volume, there was a 4% reduced risk of injury.</p>
        <li>Decreases Visceral Fat</li>
        <p>Fat stored around the abdomen, especially visceral fat, is associated with an increased risk of chronic diseases, including heart disease, nonalcoholic fatty liver disease, type 2 diabetes, and certain types of cancer. Multiple studies have shown the benefit of strength-training exercises for reducing abdominal and total body fat.</p>
        <li>Boost your Metabolism</li>
        <p class='last'>Building muscles increases your metabolic rate, they are more metabolically efficient than fat mass. Recent research shows that your metabolic rate is increased up to 72 hours after strength-training exercise. This means that you are still burning additional calories hours and even days after your workout.</p>
        </ol>
    </div>
    </div>
 )
}

export default About