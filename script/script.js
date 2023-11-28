'use strict';

const Main = (() => {
	const init = () => {
		const contentArea = document.getElementById("content");
		contentArea.innerHTML = Data.map(col => `<section style="min-width:${colwidth(Data.length)}%">
			${(col.rows || []).map(({title, items, href, color}) =>
				`${h3(title, href, color)}
				 ${list(items)}`
			).join("")}
		</section>`).join("");
	}

	const h3 = (title, href, color="blue") =>
		href
		? `<h3><a style="color:var(--${color})" href="${href}">${title}</a></h3>`
		: `<h3>${title}</h3>`;

	const list = (items) =>
		items
		? `<ul>
			${items.map(({name, href, tags, items}) => `<li>
				${item(name, href)}
				${taglist(tags)}
				${list(items)}
			</li>`).join("")}
		</ul>`
		: "";

	const item = (name, href) =>
		name
		? `${link(name, href)}&nbsp&nbsp`
		: "";

	const link = (name, href) =>
		href
		? `<a href="${href}">${name}</a>`
		: name;

	const taglist = (tags) =>
		tags
		? tags
			.map(({name, color, href}) => `[<a style="color:var(--${color})" href="${href}">${name}</a>]`)
			.join(" ")
		: "";

	const colwidth = (n) => (100-15-15-10)/n; // 15px padding on each side, 10px margin between columns

	return {
		init
	};
})();

Main.init();
