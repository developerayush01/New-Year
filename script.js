let input=document.querySelector(".form-control");
let button=document.querySelector(".btn");
let message=document.querySelector(".gift-box")
let audio=document.querySelector(".music-audio")
button.addEventListener("click",()=>{
    document.querySelector(".message").style.display="block";
    document.querySelector(".message").innerHTML = `जसरी हामी यो नयाँ अध्यायमा प्रवेश गर्दैछौं,
    २०८२ सालले तपाईंलाई अपार खुशी, गहिरो शान्ति, र अन्तहीन विकास लिएर आओस्।
    तपाईंको हृदय प्रेमले भरिएको होस्, मस्तिष्क स्पष्टताको प्रकाशले उज्यालो बनोस्,
    र तपाईंको यात्रा अर्थपूर्ण उद्देश्यतर्फ मोडियोस्। 🌸
    <br>
    ✨ तपाईंलाई शुभकामना
    <br>
    <br>
    सपनाहरू योजनामा बदलून्,
    चुनौतीहरू अवसरको ढोका बनून्,
    र
    क्षणहरू अमूल्य सम्झनामा रूपान्तरण होऊन्।
    
    नयाँ वर्षलाई हामी आशा र हिम्मत संग स्वागत गरौं। 💫
    
    तपाईं र तपाईंका प्रियजनहरूलाई समृद्ध, शान्तिपूर्ण, र शक्तिशाली २०८२ सालको हार्दिक शुभकामना! 🙏`;
    audio.style.display="block";
    audio.play();
})
