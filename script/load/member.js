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
    create() {
        return `<li style="display: inline-block; margin: 1px">
            <a href="https://github.com/${this.name}">
                <img src="https://avatars.githubusercontent.com/${this.name}?v=4?s=100" alt="${this.name}" width="100" style="">
                <sub style="display: block">${this.name}</sub>
                <div style="font-size: 0.8em">${this.role}</div>
            </a>
        </li>`;
    }
}
const members = [
    new Member("PersesTitan", Role.Owner),
    new Member("LockBell", Role.Member),
    new Member("SpaceAnd", Role.Member),
    new Member("HeavyRainy", Role.Member),
    new Member("JonghoS", Role.Member),
    new Member("ModernJake", Role.Member),
    new Member("keeui0", Role.Member)
];
let body = `<ul style="display: inline-block; padding: 0">`;
for (const member of members) {
    body += member.create();
}
body += "</ul>";
document.getElementsByClassName("member_header")[0].innerHTML = body;
