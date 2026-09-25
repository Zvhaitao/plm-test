# PR 自动代码评审（OpenCodeReview）

本仓库通过 [alibaba/open-code-review](https://github.com/alibaba/open-code-review) 对 Pull Request 做 AI 自动评审，工作流文件见 [ocr-review.yml](ocr-review.yml)。

## 触发方式

- **自动**：PR 被 `opened` / `synchronize`（推新 commit）/ `reopened` 时自动评审。
- **手动**：仓库协作者（MEMBER/OWNER/COLLABORATOR）在 PR 中评论 `/open-code-review` 或 `@open-code-review` 可重新评审。

评审结果以**行内评论**（Files changed 页）+ 一条**汇总评论**（会话页）形式贴回 PR。

## 需要配置的变量

在 **仓库 Settings → Secrets and variables → Actions** 中配置。

### Secrets（保密，页面不回显）

| 名称 | 值 |
|------|-----|
| `OCR_LLM_URL` | `https://true-sota.com/v1/messages` |
| `OCR_LLM_AUTH_TOKEN` | 你的 API Token（`sk-ts-...`） |

> Anthropic 格式端点的 URL 必须带 `/v1/messages` 路径。你的 `ANTHROPIC_BASE_URL` 是
> `https://true-sota.com`，因此完整地址为 `https://true-sota.com/v1/messages`。

### Variables（普通变量）

| 名称 | 值 | 说明 |
|------|-----|------|
| `OCR_LLM_MODEL` | `grok-4.6` | 对应你的 `ANTHROPIC_MODEL` |
| `OCR_LLM_USE_ANTHROPIC` | `true` | 该端点是 Anthropic 格式，故为 `true` |

配置来源对照（你提供的 Claude Code 风格配置 → OCR 变量）：

| 你的配置 | OCR 变量 |
|----------|----------|
| `ANTHROPIC_BASE_URL` = `https://true-sota.com` | `OCR_LLM_URL` = `https://true-sota.com/v1/messages` |
| `ANTHROPIC_AUTH_TOKEN` = `sk-ts-...` | `OCR_LLM_AUTH_TOKEN` |
| `ANTHROPIC_MODEL` = `grok-4.6` | `OCR_LLM_MODEL` = `grok-4.6` |
| （端点为 Anthropic 协议） | `OCR_LLM_USE_ANTHROPIC` = `true` |

> `GITHUB_TOKEN` 由 GitHub Actions 自动提供，无需手动配置。

## 生效前提

流水线只在 **PR** 上运行。本仓库目前还没有提交历史，需要先建立基础分支、推送代码并发起 PR，才能看到评审效果。

## 常见问题

- **评审失败 / "Failed to parse OCR output"**：先检查 `OCR_LLM_URL`、`OCR_LLM_AUTH_TOKEN` 是否正确，再看运行日志里 "Run OpenCodeReview" 步骤或上传的 `ocr-stderr.log` artifact。
- **没有任何评论**：确认 job 的 `permissions` 含 `pull-requests: write`（工作流里已设置）。
