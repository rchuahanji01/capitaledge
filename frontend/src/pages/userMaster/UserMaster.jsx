
import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
  Tag,
  Dropdown,
  Menu,
  message,
} from "antd";
import {
  UserOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { API_BASE_URL } from "@/config/serverApiConfig";

const { Option } = Select;

const UserMaster = () => {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
  });
  const [loading, setLoading] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form] = Form.useForm();

  // Fetch users
  const fetchUsers = async (page = 1, pageSize = 5) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${API_BASE_URL}users/getalluser?page=${page}&limit=${pageSize}`
      );

      const mappedUsers = (data.users || []).map((u) => ({
        ...u,
       status: u.enabled ? "Active" : "Inactive", // ✅ map enabled → status

      }));

      setUsers(mappedUsers);
      setPagination({
        current: page,
        pageSize,
        total: data.pagination?.total || mappedUsers.length || 0,
      });
    } catch (err) {
      message.error("Failed to fetch users");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Open modal
  const showModal = (user = null) => {
    setEditingUser(user);
    setIsModalVisible(true);
    if (user) {
      form.setFieldsValue(user);
    } else {
      form.resetFields();
    }
  };

  // Save user (Register or Update)
  const handleOk = async () => {
    try {
      const values = await form.validateFields();

      if (editingUser) {
        // UPDATE user
        await axios.put(`${API_BASE_URL}users/edit/${editingUser._id}`, {
          name: values.name,
          email: values.email,
          role: values.role,
          status: values.status,
        });
        message.success("User updated successfully");
      } else {
        // REGISTER user
        await axios.post(`${API_BASE_URL}users/register`, {
          name: values.name,
          email: values.email,
          password: values.password, // ✅ take from frontend form
          role: values.role,
          status: values.status,
        });
        message.success("User created successfully");
      }

      setIsModalVisible(false);
      setEditingUser(null);
      form.resetFields();
      fetchUsers(pagination.current, pagination.pageSize);
    } catch (err) {
      console.error("Save error:", err);
      message.error(err.response?.data?.error || "Something went wrong");
    }
  };

  // Delete user
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}users/${id}`);
      message.success("User deleted successfully");
      fetchUsers(pagination.current, pagination.pageSize);
    } catch (err) {
      console.error("Delete error:", err);
      message.error("Failed to delete user");
    }
  };

  // Toggle status
  const toggleStatus = async (user) => {
    try {
      const newEnabled = !(user.status === "Active");
      await axios.patch(`${API_BASE_URL}users/status/${user._id}`, {
        enabled: newEnabled,
      });
      message.success(
        `User status changed to ${newEnabled ? "Active" : "Inactive"}`
      );
      fetchUsers(pagination.current, pagination.pageSize);
    } catch (err) {
      console.error("Status error:", err);
      message.error("Failed to update status");
    }
  };

  // Table columns
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <b>{text}</b>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role) => (
        <Tag color={role === "owner" ? "blue" : "green"}>{role}</Tag>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => {
        const menu = (
          <Menu>
            <Menu.Item
              key="edit"
              icon={<EditOutlined />}
              onClick={() => showModal(record)}
            >
              Edit
            </Menu.Item>
            <Menu.Item key="toggle" onClick={() => toggleStatus(record)}>
              {record.status === "Active" ? "Deactivate" : "Activate"}
            </Menu.Item>
            <Menu.Item
              key="delete"
              icon={<DeleteOutlined />}
              danger
              onClick={() => handleDelete(record._id)}
            >
              Delete
            </Menu.Item>
          </Menu>
        );
        return (
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button icon={<MoreOutlined />} />
          </Dropdown>
        );
      },
    },
  ];

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      <h2 style={{ marginBottom: 20 }}>
        <UserOutlined /> User Management
      </h2>

      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => showModal()}
        style={{ marginBottom: 16 }}
      >
        Create User
      </Button>

      <Table
        dataSource={users}
        columns={columns}
        rowKey="_id"
        bordered
        loading={loading}
        pagination={{
          current: pagination.current,
          pageSize: pagination.pageSize,
          total: pagination.total,
          onChange: (page, pageSize) => fetchUsers(page, pageSize),
        }}
      />

      <Modal
        title={editingUser ? "Edit User" : "Create User"}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
        okText="Save"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter user name" }]}
          >
            <Input placeholder="Enter name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please enter email" }]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>

          {/* ✅ Password field only when creating */}
          {!editingUser && (
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: "Please enter password" }]}
            >
              <Input.Password placeholder="Enter password" />
            </Form.Item>
          )}

          <Form.Item
            name="role"
            label="Role"
            rules={[{ required: true, message: "Please select role" }]}
          >
            <Select placeholder="Select role">
              <Option value="owner">Owner</Option>
              <Option value="admin">Admin</Option>
              <Option value="manager">Manager</Option>
              <Option value="user">User</Option>
              <Option value="vendor">Vendor</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            initialValue="Active"
            rules={[{ required: true, message: "Please select status" }]}
          >
            <Select placeholder="Select status">
              <Option value="Active">Active</Option>
              <Option value="Inactive">Inactive</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UserMaster;

