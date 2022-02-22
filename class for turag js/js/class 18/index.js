const pic = document.querySelector("img");

console.dir(pic);

// seter
pic.alt = "flower";

// custom-attribute
// const n = pic.setAttribute("data-cool", "hello");
pic.dataset.heIsCool = "some interesting";

// geter

var result = pic.hasAttribute("alt");
console.log(result);
pic.removeAttribute("alt");

var result2 = pic.hasAttribute("alt");

console.log(result2);
