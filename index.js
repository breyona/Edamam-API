const handleRecipe = () => {
  fetch(
    "https://api.edamam.com/search?q=chicken&app_id=2b3d81c6&app_key=e3705abca8007220f307268f550af644"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.hits);

      data.hits.map((item) => {
        const ul = document.getElementById("food");
        let li = document.createElement("li");
        let span = document.createElement("span");
        let img = document.createElement("img");
        let ing = document.createElement("ing");

        span.innerHTML = `${item.recipe.label}`;
        img.src = item.recipe.image;

        li.appendChild(span);
        ul.appendChild(li);
        li.appendChild(img);
      });
    });
};
