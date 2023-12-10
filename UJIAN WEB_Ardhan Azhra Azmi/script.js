// Data sementara
let data = [];
let currentIndex = null;

function addData() {
  const brand = document.getElementById('brand').value;
  const model = document.getElementById('model').value;
  const price = document.getElementById('price').value;

  if (currentIndex === null) {
    // Tambahkan data baru
    data.push({ brand, model, price });
  } else {
    // Perbarui data yang ada
    data[currentIndex] = { brand, model, price };
    currentIndex = null;
  }

  renderTable();

  document.getElementById('crudForm').reset();
}

function deleteData(index) {
  data.splice(index, 1);
  renderTable();
}

function updateData(index) {
  currentIndex = index;
  const currentItem = data[index];
  document.getElementById('brand').value = currentItem.brand;
  document.getElementById('model').value = currentItem.model;
  document.getElementById('price').value = currentItem.price;
}

function renderTable() {
  const table = document.getElementById('dataTable');
  table.innerHTML = '<tr><th>Merk</th><th>Model</th><th>Harga</th><th>Aksi</th></tr>';

  data.forEach((item, index) => {
    const row = table.insertRow();
    row.insertCell(0).innerText = item.brand;
    row.insertCell(1).innerText = item.model;
    row.insertCell(2).innerText = item.price;
    const updateButton = document.createElement('button');
    updateButton.innerText = 'Update';
    updateButton.onclick = () => updateData(index);
    row.insertCell(3).appendChild(updateButton);
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Hapus';
    deleteButton.onclick = () => deleteData(index);
    row.insertCell(3).appendChild(deleteButton);
  });
}
