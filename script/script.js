'use strict';

const Main = (() => {
	const init = () => {
		const contentArea = document.getElementById("content");
		contentArea.innerHTML = Data.map(col => `<div class="column">
			${(col.rows || []).map(({title, items, href}) =>
				href
				? onlyLink(href, title)
				: blockWithList(title, items))
			.join("")}
		</div>`).join("");
	}

	const onlyLink = (href, title) => `<h3><a class="blue" href="${href}">${title}</a></h3>`;
	const blockWithList = (title, items) => {
		return `<h3>${title}</h3>
				<ul class="row">
					${(items || []).map(({name, href, tags}) => `<li>
						<a href="${href}">${name}</a>&nbsp&nbsp${(tags || []).map(({name, color, href}) => `
						[<a class="${color}" href="${href}">${name}</a>]`).join(" ")}
					</li>`).join("")}
				</ul>`;
	};

	return {
		init
	};
})();

Main.init();
