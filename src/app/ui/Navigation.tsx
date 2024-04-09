"use client";

import React, { useState } from "react";
import {
  BgColorsOutlined,
  ExperimentOutlined,
  ThunderboltOutlined,
  GithubOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, Row, Col } from "antd";
import { usePathname } from "next/navigation";
import Link from "next/link";

const items: MenuProps["items"] = [
  {
    label: <Link href='/'>IMGPrompt</Link>,
    key: "/",
    icon: <BgColorsOutlined />,
  },
  {
    label: (
      <a
        href='https://vvip.gptacg.com/'
        target='_blank'
        rel='noopener noreferrer'>
        ChatAI-In-One
      </a>
    ),
    key: "LearnData",
    icon: <ThunderboltOutlined />,
  },
  {
    label: (
      <a
        href='https://dooy.gptacg.com'
        target='_blank'
        rel='noopener noreferrer'>
        Dooy-AI
      </a>
    ),
    key: "aishort",
    icon: <ExperimentOutlined />,
  },
  {
    label: (
      <a
        href='https://www.gptacg.com/'
        target='_blank'
        rel='noopener noreferrer'>
        蛋壳官网
      </a>
    ),
    key: "Tools",
    icon: <ToolOutlined />,
  },
];

export function Navigation() {
  const pathname = usePathname();
  const [current, setCurrent] = useState(pathname);

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Row justify='space-between' align='middle' gutter={16}>
      <Col xs={20} sm={18} md={16}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode='horizontal'
          items={items}
        />
      </Col>
      <Col>
        <Row gutter={16} wrap={false}>
          <Col xs={0} sm={0} md={18}>
            <a
              href='https://discord.gg/PZTQfJ4GjX'
              target='_blank'
              rel='noopener noreferrer'>
              <img
                src='https://www.gptacg.com'
                alt='chat on Discord'
              />
            </a>
          </Col>
          <Col>
            <a
              href='https://github.com/rockbenben/img-prompt'
              target='_blank'
              rel='noopener noreferrer'
              style={{ marginLeft: "10px" }}>
              <GithubOutlined style={{ color: "black", fontSize: "24px" }} />
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
