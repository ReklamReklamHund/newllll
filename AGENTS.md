# Architecture Rules

- Keep shared shop product data and presentation in one reusable component so the homepage and shop page stay synchronized.
- Keep customization presentation in ProductCustomizer and selection/pricing rules in a pure helper so conditional choices can be tested without rendering the page.
- Store optional choice images in shared product data so supplied assets appear consistently without changing the customization layout.