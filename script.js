const ElementID = document.getElementById("result");
const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

function Card(name) {
    const outer = document.createElement("div");
    outer.classList.add
    (
        "col-lg-3",
        "col-md-2",
        "col-sm-6",
        "col-12",
        "mb-1"
    );
    outer.style.marginTop = "20px";

    const cardStyle = document.createElement("div");
    cardStyle.classList.add
    (
        "card",
        "border-left-primary",
        "shadow",
        "h-120",
        "py-3"
    );
    cardStyle.style.borderRadius = "5px";

    const body = document.createElement("div");
    body.classList.add("card-body");

    const content = document.createElement("div");
    content.classList.add
    (
        "row",
        "no-gutters",
        "align-items-center"
    );

    const column = document.createElement("div");
    column.classList.add
    (
        "col",
        "mr-5",
        "text-center"
    );

    const title = document.createElement("div");
    title.classList.add
    (
        "text-xs",
        "font-weight-bold",
        "text-primary",
        "mb-1",
        "text-center"

    );
    title.textContent = name;

    const button = document.createElement("button");
    button.textContent = "Detail";
    button.classList.add(
        "btn",
        "btn-primary",
        "text-center");

    const value = document.createElement("div");
    value.classList.add
    (
        "h6",
        "mb-1",
        "font-weight-normal",
        "text-black",
        "btn-primary",

    );
    // value.textContent = id;

    //
    column.appendChild(title);
    column.appendChild(button);
    content.appendChild(column);
    body.appendChild(content);
    cardStyle.appendChild(body);
    outer.appendChild(cardStyle);
    ElementID.appendChild(outer);
}

$.ajax({
    type: "GET",
    url: "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0",
    dataType: "json",
    crossDomain: true,
    success: function (response) {
        // console.log(response)
        for (let index = 0; index < 20; index++) {
            const nama = response.results[index].name
            // const id = response.results[index].url
            Card(nama);
        }
    },
});