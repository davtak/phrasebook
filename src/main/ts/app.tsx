import { h, Component } from "preact"
import { Section } from "./section"
import sections from "./test"


export interface AppProps {
  name: string
}

interface AppState {
  name: string
}

export class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = { name: props.name }
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "Preact's componentDidMount worked as expected" })
    }, 2000)
  }
  
  render(props: AppProps, state: AppState) {
    return <div>
      <h1>Φρασοβουκίς</h1>
        <div class="metadata">
          <h2>Μεταδατή</h2>
          <ul>
            <li><strong>Προπερτιαί:</strong> {props.name}</li>
            <li><strong>Στηδός:</strong> {state.name}</li>
          </ul>
        </div>
      {sections.map(jsonToSection)}
    </div>
  }
}

// Preact stuff goes above, other junk below

export interface SectionJson {
  name: string
  entries: Array<string>
}

export function jsonToSection(doc: SectionJson) {
  return <Section name={doc.name} entries={doc.entries} />
}