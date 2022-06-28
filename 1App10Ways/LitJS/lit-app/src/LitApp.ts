import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class LitApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--lit-app-text-color, #000);
    }
  `;

  @property({ type: String }) todoText:string = '';

  @property({ type: Array }) todos: string[] = [];
  
  connectedCallback(){
    super.connectedCallback();
    const existingTodos = localStorage.getItem('todos');
    this.todos = JSON.parse(existingTodos as string) || [];
  }

  connectedCallback() {
    event.preventDefault();
    this.todos = [...this.todos, this.todoText];
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  render() {
    return html`
    <ul>
      ${this.todos.map(todo => html`<li>${todo}</li>`)}
    </ul>
    <form @submit="${this.addTodo}">
      <input type="text" .value="${this.todoText}" @change=${(e: any) => this.todoText = e.target.value} />
      <input type="submit">
    </form>
  `;
  }
}
