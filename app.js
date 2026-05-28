const API = "http://localhost:8080/api/arts";

async function loadArts() {

    const response = await fetch(API);

    const arts = await response.json();

    const feed = document.getElementById("artFeed");

    feed.innerHTML = "";

    arts.forEach(art => {

        feed.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">

                    <img src="${art.imageUrl}" class="card-img-top">

                    <div class="card-body">
                        <h4 class="art-title">${art.title}</h4>

                        <p>${art.description}</p>

                        <button class="like-btn">
                            ❤️ Like
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

loadArts();
