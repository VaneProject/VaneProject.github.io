// enum Role {
//     Owner = "Owner",
//     Member = "Member"
// }
//
// class Member {
//     name: string;
//     role: Role;
//     constructor(name: string, role: Role) {
//         this.name = name;
//         this.role = role;
//     }
// }
//
// const members: Member[] = [
//     new Member("PersesTitan", Role.Owner),
//     new Member("LockBell", Role.Member),
//     new Member("SpaceAnd", Role.Member),
//     new Member("HeavyRainy", Role.Member)
// ];
//
// function create_member(member: Member): HTMLTableCellElement {
//     const td: HTMLTableCellElement = document.createElement("td");
//     const a: HTMLAnchorElement = document.createElement("a");
//     const img: HTMLImageElement = document.createElement("img");
//     td.className = "developers";
//
//     img.src = `https://avatars.githubusercontent.com/${member.name}?v=4?s=100`;
//     img.width = 100;
//     img.alt = member.name;
//
//     a.href = `https://github.com/${member.name}`;
//     a.appendChild(img);
//     a.appendChild(document.createElement("br"));
//     a.appendChild(document.createElement("sub")).innerHTML = `<b>${member.name}</b>`;
//     // append element
//     td.appendChild(a);
//     td.appendChild(document.createElement("br"));
//     td.appendChild(document.createElement("div")).innerHTML = member.role;
//     return td;
// }
//
// // create member table (onload)
// let width: number;
// const create_table_item = (): void => {
//     // get width size and update value
//     width = Math.floor(window.innerWidth / 100);
//     const developer_table: HTMLElement|null = document.getElementById("developer_table");
//     const size: number = members.length;
//     const node: Node[] = [];
//     let i: number = 0;
//     for (let a: number = 0; a < (size / width); a++) {
//         const tr: HTMLTableRowElement = document.createElement("tr");
//         for (let b: number = 0; (b < width && i < size); b++) {
//             tr.appendChild(create_member(members[i++]));
//         }
//         node.push(tr)
//     }
//     developer_table?.replaceChildren(...node)
// }
//
// window.addEventListener("load", create_table_item);
// window.onresize = function(): void {
//     if (width != Math.floor(window.innerWidth / 100)) {
//         create_table_item();
//     }
// }