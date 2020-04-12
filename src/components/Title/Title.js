import React from 'react';
import { Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table;

const data = [
  {
    key: '1',
    firstName: 'Danil',
    lastName: 'Gutzu',
    age: 18,
    address: 'Zazerka, Makarevicha street 2',
    tags: ['bad', 'developer'],
  },
  {
    key: '2',
    firstName: 'Pavel',
    lastName: 'Gutzu',
    age: 22,
    address: 'Street Pushkina dom Kolotyshkina',
    tags: ['God'],
  },
  {
    key: '3',
    firstName: 'Sveta',
    lastName: 'Gutzu',
    age: 30,
    address: 'Zazerka, Makarevicha street 2',
    tags: ['best', 'teacher'],
  },
  {
    key: '4',
    firstName: 'Sergey',
    lastName: 'Gutzu',
    age: 30,
    address: 'Zazerka, Makarevicha street 2',
    tags: ['huge', 'BOSS'],
  },
];

export default class Title extends React.Component{
    render(){
      return(
        <Table dataSource={data}>
    <ColumnGroup title="Name">
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
    </ColumnGroup>
    <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={tags => (
        <span>
          {tags.map(tag => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </span>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <span>
          <a style={{ marginRight: 16 }}>Invite {record.lastName}</a>
          <a>Delete</a>
        </span>
      )}
    />
  </Table>
      )
    }
  }