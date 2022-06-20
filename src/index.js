const passwordBox1 = document.getElementById("password-txt");
const passwordBox2 = document.getElementById("password-txt2");
const passwordBox3 = document.getElementById("password-txt3");
const passwordBox4 = document.getElementById("password-txt4");
const generateBtn = document.getElementById("generate-btn");
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@!#$%^&*()<>/?";

function generateString(length) {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

generateBtn.addEventListener("click", renderPassword);

function renderPassword() {
  passwordBox1.textContent = generateString(14);
  passwordBox2.textContent = generateString(14);
  passwordBox3.textContent = generateString(14);
  passwordBox4.textContent = generateString(14);
}

renderPassword();
