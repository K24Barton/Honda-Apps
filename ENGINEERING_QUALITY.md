# Engineering quality baseline

Status: policy proposal; no security or functional audit has been completed by this document.

## Change process
- Use feature branches and pull requests; do not commit directly to production for routine changes.
- Record the purpose, risk, verification steps, and rollback plan in each pull request.
- Run project-specific build, tests, static analysis, dependency and secret scans before merging. A missing check is **not** a passing check.
- Review data migrations, credentials, authorization, and external API changes explicitly.
- Require independent review for security-sensitive and irreversible changes.
- Preserve production secrets outside the repository and use least-privilege credentials.
- Verify deployed behavior and monitor failures after release.

## Audit backlog
- Inventory source, runtime, dependencies, CI workflows, deployment targets, and data stores.
- Identify and document security boundaries and critical failure modes.
- Establish reproducible local test commands and CI checks for the actual stack.
- Add regression tests for important workflows, including error and retry paths.
- Define backup/restore and rollback procedures, and test them.
- Document outstanding risks, ownership, and release-blocking conditions.

## Release decision
A green badge is meaningful only if required checks cover the change. Do not claim SOC 2 compliance, security certification, production readiness, or absence of vulnerabilities based solely on passing automated tests.
