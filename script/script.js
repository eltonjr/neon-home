'use strict';

const Main = (() => {
	const init = () => {
		const contentArea = document.getElementById("content");
		contentArea.innerHTML = Data.map(col => `<div class="column">
			${col.rows.map(({title, items}) => `
				<h3>${title}</h3>
				<ul class="row">
				${items.map(({name, href, tags}) => `<li>
                    <a href="${href}">${name}</a>&nbsp&nbsp${(tags || []).map(({name, href}) => `
                    [<a class="${name}" href="${href}">${name}</a>]`).join(" ")}
				</li>`).join("")}
			</ul>`).join("")}
		</div>`).join("");
	}

	return {
		init
	};
})();

Main.init();
