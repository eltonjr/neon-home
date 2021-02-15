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
			"href": "https://example.com/",
			"tags": [{
				"name": "git",
				"href": "http://github.com/example"
			}]
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
				${items.map(({name, href, tags}) => `<li>
                    <a target="_blank" href="${href}">${name}</a>&nbsp&nbsp${(tags || []).map(({name, href}) => `
                    [<a target="_blank" class="${name}" href="${href}">${name}</a>]`).join("&nbsp")}
				</li>`).join("")}
			</ul>`).join("")}
		</div>`).join("");
	}

	return {
		init
	};
})();

Main.init();
