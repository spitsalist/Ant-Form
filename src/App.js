import React, { useState } from 'react';
import { Form as AntForm, Input, Button, Card, Typography } from 'antd';

const { Title } = Typography;

const App = () => {
  const [form] = AntForm.useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (values) => {
    setSubmittedData(values);
    form.resetFields();
  };

  return (
    <div style={{ padding: '50px' }}>
      <Title level={2}>Ant Design</Title>
      <AntForm
        form={form}
        layout="vertical"
        onFinish={handleFormSubmit}
        initialValues={{ name: '', description: '' }}
        style={{ maxWidth: '600px' }}
      >
        <AntForm.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </AntForm.Item>

        <AntForm.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please input your description!' }]}
        >
          <Input.TextArea rows={4} />
        </AntForm.Item>

        <AntForm.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </AntForm.Item>
      </AntForm>

      {submittedData && (
        <Card style={{ marginTop: '20px' }}>
          <Title level={4}>Submitted Data</Title>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Description:</strong> {submittedData.description}</p>
        </Card>
      )}
    </div>
  );
};

export default App;