const Storage = function(items) {
this.items = items;
}

Storage.prototype.getItems = function() {
  return this.items;
}

Storage.prototype.addItem = function(item) {
  this.items.push(item);
}

Storage.prototype.removeItem = function(item) {
  if (this.items.indexOf(item) != -1) {
    console.log(this.items.indexOf(item));
    this.items.splice(this.items.indexOf(item), 1)
  }
}

const storage = new Storage([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',
  'Антигравітатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]