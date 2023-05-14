let randomButton = document.getElementById("random");
let nextButton = document.getElementById("next");
let memeBox = document.getElementById("meme");

let memes = {
	1: "/images/1.png",
	2: "/images/2.png",
	3: "/images/3.png",
	4: "/images/4.png",
	5: "/images/5.png",
	6: "/images/6.png",
	7: "/images/7.png",
	8: "/images/8.png",
	9: "/images/9.png",
	10: "/images/10.png",
};

randomButton.addEventListener("click", () => {
	let num = Math.ceil(Math.random() * 10);
	memeBox.src = memes[num];
});
