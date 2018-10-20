import { h, Component } from "preact"

export interface SectionProps {
  name: string
  entries: Array<string>
}

interface SectionState {
  name: string
  entries: Array<string>
}

export class Section extends Component<SectionProps, SectionState> {
  constructor(props: SectionProps) {
    super(props)
    this.state = {
      name: props.name,
      entries: props.entries
    }
  }

  // componentDidMount() {}

  render(props: SectionProps, state: SectionState) {
    return <div class="section">
      <h2>{this.state.name}</h2>
      {createEntries(this.state.entries)}
    </div>
  }
}

// Preact stuff goes above, other junk below

function createEntries(entries: Array<string>) {
  return <ul class="entries">
    {entries.map(e =>
      <li>
        <div>
          <span>{e}</span>
        </div>
      </li>
    )}
  </ul>
}


