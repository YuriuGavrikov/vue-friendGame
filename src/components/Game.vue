<script setup>
import { ref, onMounted } from "vue";

const placeholderString = ref("Введите текст");
const userNameValue = ref("");
const inputValue = ref("");
const noteItem = ref({});
const notes = ref([]);

const addNewNote = () => {
	if (inputValue.value !== "") {
		let obj = {
			visible: false,
			text: inputValue.value,
		};

		notes.value.push(obj);

		inputValue.value = "";

		localStorage.setItem("notes", JSON.stringify(notes.value));
	}
};
const removeNote = (i) => {
	notes.value.splice(i, 1);
	localStorage.setItem("notes", JSON.stringify(notes.value));
};
onMounted(() => {
	const data = localStorage.getItem("notes");
	if (data) {
		notes.value = JSON.parse(data);
	}
});
</script>

<template>
	<div class="container" id="app" v-cloak>
		<div class="myImg"></div>
		<div class="card">
			<div class="form-control">
				<input
					type="text"
					:placeholder="placeholderString"
					v-model="inputValue"
					@keypress.enter="addNewNote"
				/>
			</div>
			<button class="btn" @click="addNewNote">Добавить</button>
			<hr />
			<ul class="list" v-if="notes.length !== 0">
				<li class="list-item" v-for="(note, i) in notes">
					<div>
						<h3 class="itemText" v-if="note.visible">{{ note.text }}</h3>
						<h4 class="itemText" v-else="note.visible">Скрытый текст</h4>
					</div>
					<div class="btnBox">
						<button class="btn" @click="note.visible = !note.visible">
							{{ note.visible ? "Скрыть" : "Отобразить" }}
						</button>
						<button class="btn danger" @click="removeNote(i)">Удалить</button>
					</div>
				</li>
				<hr />
				<li>
					<strong>Общее количество : {{ notes.length }}</strong>
				</li>
			</ul>
			<div v-else>Здесь пока ничего нет. Будьте первым!</div>
		</div>
	</div>
</template>

<style scoped></style>
