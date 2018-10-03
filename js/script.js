const contactButton = document.querySelector(".contact-button");
const popup = document.querySelector(".popup");
const popupButtonInner = document.querySelector(".popup-button-inner");
var html = document.getElementsByTagName("html");

function addClassToTag(classNameTag, tag) {
	tag.classList.add(classNameTag);
}

function showBlock(tag, tag2, classNameTag) {
	tag.addEventListener("click", function(event) {
		event.preventDefault();
		addClassToTag(classNameTag, tag2);
	});
}

function closeBlock(tag, tag2, classNameTag, htmlDocument) {
	tag.addEventListener("click", function(event) {
		event.preventDefault();
		tag2.classList.remove(classNameTag);
	});
}

showBlock(contactButton, popup, "show-popup");
closeBlock(popupButtonInner, popup, "show-popup", html);