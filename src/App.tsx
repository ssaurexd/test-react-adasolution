import { FC, useState } from 'react'
import { Button, Input, ListItem, Modal, ModalFooter, ReturnIcon } from './components'


interface IListItem {
  id: string
  value: string
  selected: boolean
}
interface Props {}
const App: FC<Props> = () => {
  const [ open, setOpen ] = useState( false )
  const [ listItems, setListItems ] = useState<IListItem[]>( [] )
  const [ removedItems, setRemovedItems ] = useState<IListItem[]>( [] )
  const [ newValue, setNewValue ] = useState( '' )

  /* functions */
  const genID = () => {
    return Math.random().toString( 36 ).substring( 0, 10 )
  }

  const onAddNewItem = () => {
    /* validate value */
    if( newValue.trim() === '' ) return

    const newItem: IListItem = {
      id: genID(),
      value: newValue,
      selected: false
    }
    setListItems( prev => [ ...prev, newItem ] )
    setNewValue( '' )
    setOpen( false )
  }

  const onListItemClick = ( id: string ) => {
    setListItems( prev => prev.map( item => {
      if( item.id === id ) return { ...item, selected: !item.selected }
      return item
    }))
  }

  const removeItemById = ( id: string ) => {

    /* find item */
    const item = listItems.find( item => item.id === id )
    setRemovedItems([ item! ])
    setListItems( prev => prev.filter( item => item.id !== id ) )
  }

  const removeSelectedItems = () => {
    const selectedItems = listItems.filter( item => item.selected )

    setRemovedItems( selectedItems )
    setListItems( prev => prev.filter( item => !item.selected ) )
  }

  const restoreItems = () => {
    setListItems( prev => [ ...prev, ...removedItems ] )
    setRemovedItems( [] )
  }

  return (
    <main className='main shadow-2'>
      <h1>This is a technical proof</h1>
      <p className="txt-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Ad beatae ex quaerat veniam ducimus omnis cupiditate laboriosam 
        assumenda accusamus architecto laborum consequatur nobis corrupti 
        facilis consequuntur illum, quisquam voluptas! Sit.
      </p>
      <ul className='list shadow-1'>
        { listItems.map(( item ) => (
          <ListItem 
            key={ item.id }
            children={ item.value }
            selected={ item.selected }
            onClick={ () => onListItemClick( item.id ) }
            onDoubleClick={ () => removeItemById( item.id ) }
          />
        ))}
      </ul>
      <section className='actions-container'>
        <div >
          <Button 
            children={ <ReturnIcon size={ 14 } /> }
            onClick={ restoreItems }
            variant='outline'
            className='btn-fit mr-1'
          />
          <Button 
            children='delete'
            onClick={ removeSelectedItems }
            variant='outline'
          />
        </div>
        <Button 
          children='Add'
          onClick={ () => setOpen( true ) }
          variant='contained'
        />
      </section>

      {/* PROMPT */}
      <Modal open={ open }>
        <div className='input-container'>
          <Input 
            children='Add item to list'
            placeholder='Type here'
            value={ newValue }
            onChange={ e => setNewValue( e.target.value ) }
          />
        </div>
        <ModalFooter>
          <Button 
            variant='contained'
            onClick={ onAddNewItem }
          >
            Add
          </Button>
          <Button 
            variant='outline'
            onClick={ () => setOpen( false ) }
          >
            cancel
          </Button>
        </ModalFooter>
      </Modal>
    </main>
  )
}

export default App