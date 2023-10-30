"use strict";
var Role;
(function (Role) {
    Role["Owner"] = "Owner";
    Role["Member"] = "Member";
})(Role || (Role = {}));
class Member {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}
const members = [
    new Member("PersesTitan", Role.Owner),
    new Member("LockBell", Role.Member),
    new Member("SpaceAnd", Role.Member),
    new Member("HeavyRainy", Role.Member)
];
function create_member(member) {
    const td = document.createElement("td");
    const a = document.createElement("a");
    const img = document.createElement("img");
    td.className = "developers";
    img.src = `https://avatars.githubusercontent.com/${member.name}?v=4?s=100`;
    img.width = 100;
    img.alt = member.name;
    a.href = `https://github.com/${member.name}`;
    a.appendChild(img);
    a.appendChild(document.createElement("br"));
    a.appendChild(document.createElement("sub")).innerHTML = `<b>${member.name}</b>`;
    // append element
    td.appendChild(a);
    td.appendChild(document.createElement("br"));
    td.appendChild(document.createElement("div")).innerHTML = member.role;
    return td;
}
// create member table (onload)
let width;
const create_table_item = () => {
    // get width size and update value
    width = Math.floor(window.innerWidth / 100);
    const developer_table = document.getElementById("developer_table");
    const size = members.length;
    const node = [];
    let i = 0;
    for (let a = 0; a < (size / width); a++) {
        const tr = document.createElement("tr");
        for (let b = 0; (b < width && i < size); b++) {
            tr.appendChild(create_member(members[i++]));
        }
        node.push(tr);
    }
    developer_table === null || developer_table === void 0 ? void 0 : developer_table.replaceChildren(...node);
};
window.addEventListener("load", create_table_item);
window.onresize = function () {
    if (width != Math.floor(window.innerWidth / 100)) {
        create_table_item();
    }
};
