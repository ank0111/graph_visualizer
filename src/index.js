"use strict";
function draw() {
    var textarea = document.getElementById('in');
    var inputs = textarea.value.split(/\r\n|\n/);
    var direction = document.getElementById('direction').checked;
    var cost = document.getElementById('cost').checked;
    var [N, M] = inputs[0].split(" ").map(x => Number(x));
    var nodes = new vis.DataSet([...Array(N)].map((_, i) => {
        var r = { id: i + 1, label: String(i + 1), group: String(i) };
        return r;
    }));
    var edges = new vis.DataSet([...Array(M)].map((_, i) => {
        var [u, v, c] = inputs[i + 1].split(" ").map(x => Number(x));
        console.log(c);
        var r = { to: u, from: v, arrows: direction ? "to" : "", label: cost ? String(c) : "" };
        return r;
    }));
    var container = document.getElementById('network');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {};
    var network = new vis.Network(container, data, options);
}
