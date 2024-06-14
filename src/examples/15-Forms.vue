<script>
export default {
  data() {
    return {
      text: '',
      textarea: '',
      selected: 'A',
      dynamicSelected: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
      names: [],
      picked: 'One',
      toggle: '',
      dynamicToggle: '',
      dynamicTrueValue: '1',
      dynamicFalseValue: '0'
    }
  }
}
</script>

<template>
  <div class="flex gap-5">
    <div class="flex-col flex gap-3">
      <div>
        <h1>Text input</h1>
        <p>My name is: {{ text }}</p>
        <input v-model="text" placeholder="What's your name?" />
      </div>

      <div>
        <h1>Textarea input</h1>
        <p>My message is: {{ textarea }}</p>
        <textarea
          class="border border-black"
          v-model="textarea"
          placeholder="Multiline message"
        ></textarea>
      </div>

      <div>
        <h1>Select input</h1>
        <div>Selected option: {{ selected }}</div>
      </div>

      <div>
        <select class="border border-black" v-model="selected">
          <option disabled value="">Please select one option</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>

      <div>
        <h1>Select input with dynamic options</h1>
        <div>Selected option: {{ dynamicSelected }}</div>

        <select class="border border-black" v-model="dynamicSelected">
          <option v-for="option in options" :value="option.value" :key="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>

      <div>
        <h1>Radio input</h1>
        <div>Picked: {{ picked }}</div>

        <input type="radio" id="one" value="One" v-model="picked" />
        <label for="one">One</label>

        <input type="radio" id="two" value="Two" v-model="picked" />
        <label for="two">Two</label>
      </div>

      <div>
        <h1>Checkbox input</h1>
        <div>Checked names: {{ names }}</div>

        <input type="checkbox" id="miquel" value="Miquel" v-model="names" />
        <label for="miquel">Miquel</label>

        <input type="checkbox" id="alejandro" value="Alejandro" v-model="names" />
        <label for="alejandro">Alejandro</label>

        <input type="checkbox" id="juan" value="Juan" v-model="names" />
        <label for="juan">Juan</label>
      </div>

      <div>
        <input
          class="border border-black"
          :value="text"
          @input="(event) => (text = event.target.value)"
        />

        <input v-model="text" />
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <div>
        <h1>Select input</h1>
        <div>Selected option: {{ selected }}</div>

        <select class="border border-black" v-model="selected">
          <option :value="{ number: 123 }">123</option>
        </select>
      </div>

      <div>
        <h1>Checkbox input</h1>
        <div>Checked: {{ toggle }}</div>

        <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
      </div>

      <div>
        <div>Checked: {{ dynamicToggle }}</div>
        <input
          type="checkbox"
          v-model="dynamicToggle"
          :true-value="dynamicTrueValue"
          :false-value="dynamicFalseValue"
        />
      </div>
    </div>
  </div>
</template>
