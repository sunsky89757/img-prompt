"use client";

import React, { useState, useEffect } from "react";
import { Menu, Row, Col, Space, Grid } from "antd";
import { usePathname } from "next/navigation";
import { GithubOutlined } from "@ant-design/icons";
import { MENU_ITEMS, DISCORD_LINK, GITHUB_LINK, DISCORD_BADGE_SRC } from "./data";

const items: MenuProps["items"] = [
  {
    label: <Link href='/'>IMGPrompt</Link>,
    key: "/",
    icon: <BgColorsOutlined />,
  },
  {
    label: (
      <a
        href='https://nextchat.gptacg.com/'
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
  const screens = useBreakpoint();

  useEffect(() => {
    setCurrent(pathname);
  }, [pathname]);

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Row justify="space-between" align="middle" gutter={[16, 16]} wrap={false} style={{ backgroundColor: "#fff", padding: "0 24px" }}>
      <Col flex="auto">
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={MENU_ITEMS} />
      </Col>
      <Col>
        <Row gutter={16} wrap={false}>
          <Col xs={0} sm={0} md={18}>
            <a
              href='https://www.gptacg.com'
              target='_blank'
              rel='noopener noreferrer'>
              <img
                src='https://img.shields.io/discord/1048780149899939881?color=%2385c8c8&label=Discord&logo=discord&style=for-the-badge'
                alt='Enjoy on Danke'
              />
            </a>
          )}
          {screens.md && (
            <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
              <GithubOutlined style={{ color: "black", fontSize: "24px", padding: "4px" }} />
            </a>
          )}
        </Space>
      </Col>
    </Row>
  );
}
