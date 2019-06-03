**Schema:**

```jsx
const schema = {
    label: 'Activity',
    name: 'activity',
    type: 'select',
    attrs: {
        options: [
            {
                label: 'A',
                value: 'a',
            },
            {
                label: 'B',
                value: 'b',
            },
            {
                label: 'C',
                value: 'c',
            },
        ],
    },
};

return <pre>{JSON.stringify(schema, null, 4)}</pre>;
```

```jsx
import schema from './example.1.json';

const errors = {
    email: 'Invalid email',
};

let onChange = (value, index) => {
    console.log('onChange', value, index);
    let newValues = [...state.values];
    newValues[index] = value;
    setState({ values: newValues });
};

<Multiplier
    name="timeAllocationLine"
    buttonLabel="ADD"
    buttonClassName="time-allocation-add-button"
    values={state.values}
    errors={errors}
    schema={schema}
    max={5}
    separator={false}
    remove={false}
    onChange={onChange}
/>;
```

**Schema:**

```jsx
const schema = [
    {
        fields: [
            {
                label: 'Activity',
                name: 'activity',
                type: 'select',
                attrs: {
                    options: [
                        {
                            label: 'A',
                            value: 'a',
                        },
                        {
                            label: 'B',
                            value: 'b',
                        },
                        {
                            label: 'C',
                            value: 'c',
                        },
                    ],
                },
            },
            {
                label: 'Name',
                name: 'name',
                type: 'text',
                isRequired: true,
            },
            {
                label: 'Email',
                name: 'email',
                type: 'text',
                isRequired: true,
            },
        ],
    },
];

return <pre>{JSON.stringify(schema, null, 4)}</pre>;
```

```jsx
import schema from './example.json';

const errors = {
    email: 'Invalid email',
};

let onChange = (value, index) => {
    let newValues = [...state.values];
    newValues[index] = value;
    setState({ values: newValues });
};

let onRemove = (index) => {
    let newValues = [...state.values];
    newValues.splice(index, 1);
    setState({ values: newValues });
};

<Multiplier
    name="timeAllocationLine"
    buttonLabel="+ Add"
    buttonClassName="time-allocation-add-button"
    values={state.values}
    errors={errors}
    schema={schema}
    max={5}
    separator={true}
    remove={true}
    onChange={onChange}
    onRemove={onRemove}
/>;
```

Full-width

```jsx
import schema from './example.json';

const errors = {
    email: 'Invalid email',
};

let onChange = (value, index) => {
    let newValues = [...state.values];
    newValues[index] = value;
    setState({ values: newValues });
};

let onRemove = (index) => {
    let newValues = [...state.values];
    newValues.splice(index, 1);
    setState({ values: newValues });
};

<Multiplier
    name="full-width-example"
    isFullWidth={true}
    buttonLabel="Add"
    values={state.values}
    errors={errors}
    schema={schema}
    max={5}
    separator={true}
    remove={true}
    onChange={onChange}
    onRemove={onRemove}
/>;
```

### Component tree

---

-   root
-   multiplierControl - every item container
-   container - items and button container
-   buttonContainer
-   button
-   [Section](#/Forms?id=Section)
-   [Form](#/Forms?id=Form) - component for render a group of inputs
-   fieldControl - internal component for render individual inputs