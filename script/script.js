'use strict';

const Data = [{
	rows: [{
		title: "#examle",
		items: [
		{
			"name": "example",
			"href": "https://example.com/"
		}
	]
	},{
		title: "#examle",
		items: [
		{
			"name": "example",
			"href": "https://example.com/"
		}
	]
	}]
}, {
	rows: [{
		title: "#examle",
		items: [
		{
			"name": "example",
			"href": "https://example.com/"
		}
	]
	}]
}, {
	rows: [{
		title: "#examle",
		items: [
		{
			"name": "example",
			"href": "https://example.com/"
		}
	]
	}]
}]

const Main = (() => {
	const init = () => {
		const contentArea = document.getElementById("content");
		contentArea.innerHTML = Data.map(col => `<div class="column">
			${col.rows.map(({title, items}) => `
				<h3>${title}</h3>
				<ul class="row">
				${items.map(({name, href}) => `<li>
					<a target="_blank" href="${href}">${name}</a>
				</li>`).join("")}
			</ul>`).join("")}
		</div>`).join("");
	}

	return {
		init
	};
})();

Main.init();
