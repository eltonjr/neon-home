'use strict';

const Main = (() => {
	const init = () => {
		const contentArea = document.getElementById("content");
		contentArea.innerHTML = Data.map(col => `<div class="column">
			${(col.rows || []).map(({title, items, href, color}) =>
				`${h3(title, href, color)}
				 ${list(items)}`
			).join("")}
		</div>`).join("");
	}

	const h3 = (title, href, color="blue") =>
		href
		? `<h3><a style="color:var(--${color})" href="${href}">${title}</a></h3>`
		: `<h3>${title}</h3>`;

	const list = (items) =>
		items
		? `<ul>
			${items.map(({name, href, tags, items}) => `<li>
				${link(name, href)}
				${taglist(tags)}
				${list(items)}
			</li>`).join("")}
		</ul>`
		: "";

	const link = (name, href) =>
		name
		? `<a href="${href}">${name}</a>&nbsp&nbsp`
		: "";

	const taglist = (tags) =>
		tags
		? tags
			.map(({name, color, href}) => `[<a style="color:var(--${color})" href="${href}">${name}</a>]`)
			.join(" ")
		: "";

	return {
		init
	};
})();

Main.init();
