# `sessionPolicy` Submodule <a name="`sessionPolicy` Submodule" id="@cdktn/provider-snowflake.sessionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SessionPolicy <a name="SessionPolicy" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy snowflake_session_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer"></a>

```python
from cdktn_provider_snowflake import session_policy

sessionPolicy.SessionPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database: str,
  name: str,
  schema: str,
  allowed_secondary_roles: SessionPolicyAllowedSecondaryRoles = None,
  blocked_secondary_roles: SessionPolicyBlockedSecondaryRoles = None,
  comment: str = None,
  id: str = None,
  session_idle_timeout_mins: typing.Union[int, float] = None,
  session_ui_idle_timeout_mins: typing.Union[int, float] = None,
  timeouts: SessionPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the session policy. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the session policy. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the session policy. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.allowedSecondaryRoles">allowed_secondary_roles</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles">SessionPolicyAllowedSecondaryRoles</a></code> | allowed_secondary_roles block. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.blockedSecondaryRoles">blocked_secondary_roles</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles">SessionPolicyBlockedSecondaryRoles</a></code> | blocked_secondary_roles block. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the session policy. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#id SessionPolicy#id}. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.sessionIdleTimeoutMins">session_idle_timeout_mins</a></code> | <code>typing.Union[int, float]</code> | For Snowflake clients and programmatic clients, specifies the number of minutes in which a session can be idle before users must authenticate to Snowflake again. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.sessionUiIdleTimeoutMins">session_ui_idle_timeout_mins</a></code> | <code>typing.Union[int, float]</code> | For Snowsight, specifies the number of minutes in which a session can be idle before users must authenticate to Snowflake again. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts">SessionPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the session policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#database SessionPolicy#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the session policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#name SessionPolicy#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the session policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#schema SessionPolicy#schema}

---

##### `allowed_secondary_roles`<sup>Optional</sup> <a name="allowed_secondary_roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.allowedSecondaryRoles"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles">SessionPolicyAllowedSecondaryRoles</a>

allowed_secondary_roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#allowed_secondary_roles SessionPolicy#allowed_secondary_roles}

---

##### `blocked_secondary_roles`<sup>Optional</sup> <a name="blocked_secondary_roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.blockedSecondaryRoles"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles">SessionPolicyBlockedSecondaryRoles</a>

blocked_secondary_roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#blocked_secondary_roles SessionPolicy#blocked_secondary_roles}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the session policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#comment SessionPolicy#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#id SessionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `session_idle_timeout_mins`<sup>Optional</sup> <a name="session_idle_timeout_mins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.sessionIdleTimeoutMins"></a>

- *Type:* typing.Union[int, float]

For Snowflake clients and programmatic clients, specifies the number of minutes in which a session can be idle before users must authenticate to Snowflake again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#session_idle_timeout_mins SessionPolicy#session_idle_timeout_mins}

---

##### `session_ui_idle_timeout_mins`<sup>Optional</sup> <a name="session_ui_idle_timeout_mins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.sessionUiIdleTimeoutMins"></a>

- *Type:* typing.Union[int, float]

For Snowsight, specifies the number of minutes in which a session can be idle before users must authenticate to Snowflake again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#session_ui_idle_timeout_mins SessionPolicy#session_ui_idle_timeout_mins}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts">SessionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#timeouts SessionPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putAllowedSecondaryRoles">put_allowed_secondary_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putBlockedSecondaryRoles">put_blocked_secondary_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetAllowedSecondaryRoles">reset_allowed_secondary_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetBlockedSecondaryRoles">reset_blocked_secondary_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetSessionIdleTimeoutMins">reset_session_idle_timeout_mins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetSessionUiIdleTimeoutMins">reset_session_ui_idle_timeout_mins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_allowed_secondary_roles` <a name="put_allowed_secondary_roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putAllowedSecondaryRoles"></a>

```python
def put_allowed_secondary_roles(
  all: bool | IResolvable = None,
  none: bool | IResolvable = None,
  roles: typing.List[str] = None
) -> None
```

###### `all`<sup>Optional</sup> <a name="all" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putAllowedSecondaryRoles.parameter.all"></a>

- *Type:* bool | cdktn.IResolvable

When true, allows all secondary roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#all SessionPolicy#all}

---

###### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putAllowedSecondaryRoles.parameter.none"></a>

- *Type:* bool | cdktn.IResolvable

When true, disallows all secondary roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#none SessionPolicy#none}

---

###### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putAllowedSecondaryRoles.parameter.roles"></a>

- *Type:* typing.List[str]

Specifies roles to be allowed as secondary roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#roles SessionPolicy#roles}

---

##### `put_blocked_secondary_roles` <a name="put_blocked_secondary_roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putBlockedSecondaryRoles"></a>

```python
def put_blocked_secondary_roles(
  all: bool | IResolvable = None,
  none: bool | IResolvable = None,
  roles: typing.List[str] = None
) -> None
```

###### `all`<sup>Optional</sup> <a name="all" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putBlockedSecondaryRoles.parameter.all"></a>

- *Type:* bool | cdktn.IResolvable

When true, disallows all secondary roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#all SessionPolicy#all}

---

###### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putBlockedSecondaryRoles.parameter.none"></a>

- *Type:* bool | cdktn.IResolvable

When true, allows all secondary roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#none SessionPolicy#none}

---

###### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putBlockedSecondaryRoles.parameter.roles"></a>

- *Type:* typing.List[str]

Specifies roles to be blocked as secondary roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#roles SessionPolicy#roles}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#create SessionPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#delete SessionPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#read SessionPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#update SessionPolicy#update}.

---

##### `reset_allowed_secondary_roles` <a name="reset_allowed_secondary_roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetAllowedSecondaryRoles"></a>

```python
def reset_allowed_secondary_roles() -> None
```

##### `reset_blocked_secondary_roles` <a name="reset_blocked_secondary_roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetBlockedSecondaryRoles"></a>

```python
def reset_blocked_secondary_roles() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_session_idle_timeout_mins` <a name="reset_session_idle_timeout_mins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetSessionIdleTimeoutMins"></a>

```python
def reset_session_idle_timeout_mins() -> None
```

##### `reset_session_ui_idle_timeout_mins` <a name="reset_session_ui_idle_timeout_mins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetSessionUiIdleTimeoutMins"></a>

```python
def reset_session_ui_idle_timeout_mins() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SessionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isConstruct"></a>

```python
from cdktn_provider_snowflake import session_policy

sessionPolicy.SessionPolicy.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import session_policy

sessionPolicy.SessionPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import session_policy

sessionPolicy.SessionPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import session_policy

sessionPolicy.SessionPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SessionPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SessionPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SessionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SessionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.allowedSecondaryRoles">allowed_secondary_roles</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference">SessionPolicyAllowedSecondaryRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.blockedSecondaryRoles">blocked_secondary_roles</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference">SessionPolicyBlockedSecondaryRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList">SessionPolicyDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList">SessionPolicyShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference">SessionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.allowedSecondaryRolesInput">allowed_secondary_roles_input</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles">SessionPolicyAllowedSecondaryRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.blockedSecondaryRolesInput">blocked_secondary_roles_input</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles">SessionPolicyBlockedSecondaryRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.sessionIdleTimeoutMinsInput">session_idle_timeout_mins_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.sessionUiIdleTimeoutMinsInput">session_ui_idle_timeout_mins_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts">SessionPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.sessionIdleTimeoutMins">session_idle_timeout_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.sessionUiIdleTimeoutMins">session_ui_idle_timeout_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allowed_secondary_roles`<sup>Required</sup> <a name="allowed_secondary_roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.allowedSecondaryRoles"></a>

```python
allowed_secondary_roles: SessionPolicyAllowedSecondaryRolesOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference">SessionPolicyAllowedSecondaryRolesOutputReference</a>

---

##### `blocked_secondary_roles`<sup>Required</sup> <a name="blocked_secondary_roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.blockedSecondaryRoles"></a>

```python
blocked_secondary_roles: SessionPolicyBlockedSecondaryRolesOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference">SessionPolicyBlockedSecondaryRolesOutputReference</a>

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.describeOutput"></a>

```python
describe_output: SessionPolicyDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList">SessionPolicyDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.showOutput"></a>

```python
show_output: SessionPolicyShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList">SessionPolicyShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.timeouts"></a>

```python
timeouts: SessionPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference">SessionPolicyTimeoutsOutputReference</a>

---

##### `allowed_secondary_roles_input`<sup>Optional</sup> <a name="allowed_secondary_roles_input" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.allowedSecondaryRolesInput"></a>

```python
allowed_secondary_roles_input: SessionPolicyAllowedSecondaryRoles
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles">SessionPolicyAllowedSecondaryRoles</a>

---

##### `blocked_secondary_roles_input`<sup>Optional</sup> <a name="blocked_secondary_roles_input" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.blockedSecondaryRolesInput"></a>

```python
blocked_secondary_roles_input: SessionPolicyBlockedSecondaryRoles
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles">SessionPolicyBlockedSecondaryRoles</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `session_idle_timeout_mins_input`<sup>Optional</sup> <a name="session_idle_timeout_mins_input" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.sessionIdleTimeoutMinsInput"></a>

```python
session_idle_timeout_mins_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_ui_idle_timeout_mins_input`<sup>Optional</sup> <a name="session_ui_idle_timeout_mins_input" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.sessionUiIdleTimeoutMinsInput"></a>

```python
session_ui_idle_timeout_mins_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | SessionPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts">SessionPolicyTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `session_idle_timeout_mins`<sup>Required</sup> <a name="session_idle_timeout_mins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.sessionIdleTimeoutMins"></a>

```python
session_idle_timeout_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_ui_idle_timeout_mins`<sup>Required</sup> <a name="session_ui_idle_timeout_mins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.sessionUiIdleTimeoutMins"></a>

```python
session_ui_idle_timeout_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SessionPolicyAllowedSecondaryRoles <a name="SessionPolicyAllowedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles.Initializer"></a>

```python
from cdktn_provider_snowflake import session_policy

sessionPolicy.SessionPolicyAllowedSecondaryRoles(
  all: bool | IResolvable = None,
  none: bool | IResolvable = None,
  roles: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles.property.all">all</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, allows all secondary roles. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles.property.none">none</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, disallows all secondary roles. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles.property.roles">roles</a></code> | <code>typing.List[str]</code> | Specifies roles to be allowed as secondary roles. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles.property.all"></a>

```python
all: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, allows all secondary roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#all SessionPolicy#all}

---

##### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles.property.none"></a>

```python
none: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, disallows all secondary roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#none SessionPolicy#none}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

Specifies roles to be allowed as secondary roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#roles SessionPolicy#roles}

---

### SessionPolicyBlockedSecondaryRoles <a name="SessionPolicyBlockedSecondaryRoles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles.Initializer"></a>

```python
from cdktn_provider_snowflake import session_policy

sessionPolicy.SessionPolicyBlockedSecondaryRoles(
  all: bool | IResolvable = None,
  none: bool | IResolvable = None,
  roles: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles.property.all">all</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, disallows all secondary roles. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles.property.none">none</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, allows all secondary roles. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles.property.roles">roles</a></code> | <code>typing.List[str]</code> | Specifies roles to be blocked as secondary roles. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles.property.all"></a>

```python
all: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, disallows all secondary roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#all SessionPolicy#all}

---

##### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles.property.none"></a>

```python
none: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, allows all secondary roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#none SessionPolicy#none}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

Specifies roles to be blocked as secondary roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#roles SessionPolicy#roles}

---

### SessionPolicyConfig <a name="SessionPolicyConfig" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import session_policy

sessionPolicy.SessionPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database: str,
  name: str,
  schema: str,
  allowed_secondary_roles: SessionPolicyAllowedSecondaryRoles = None,
  blocked_secondary_roles: SessionPolicyBlockedSecondaryRoles = None,
  comment: str = None,
  id: str = None,
  session_idle_timeout_mins: typing.Union[int, float] = None,
  session_ui_idle_timeout_mins: typing.Union[int, float] = None,
  timeouts: SessionPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the session policy. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the session policy. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the session policy. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.allowedSecondaryRoles">allowed_secondary_roles</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles">SessionPolicyAllowedSecondaryRoles</a></code> | allowed_secondary_roles block. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.blockedSecondaryRoles">blocked_secondary_roles</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles">SessionPolicyBlockedSecondaryRoles</a></code> | blocked_secondary_roles block. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the session policy. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#id SessionPolicy#id}. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.sessionIdleTimeoutMins">session_idle_timeout_mins</a></code> | <code>typing.Union[int, float]</code> | For Snowflake clients and programmatic clients, specifies the number of minutes in which a session can be idle before users must authenticate to Snowflake again. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.sessionUiIdleTimeoutMins">session_ui_idle_timeout_mins</a></code> | <code>typing.Union[int, float]</code> | For Snowsight, specifies the number of minutes in which a session can be idle before users must authenticate to Snowflake again. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts">SessionPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the session policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#database SessionPolicy#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the session policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#name SessionPolicy#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the session policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#schema SessionPolicy#schema}

---

##### `allowed_secondary_roles`<sup>Optional</sup> <a name="allowed_secondary_roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.allowedSecondaryRoles"></a>

```python
allowed_secondary_roles: SessionPolicyAllowedSecondaryRoles
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles">SessionPolicyAllowedSecondaryRoles</a>

allowed_secondary_roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#allowed_secondary_roles SessionPolicy#allowed_secondary_roles}

---

##### `blocked_secondary_roles`<sup>Optional</sup> <a name="blocked_secondary_roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.blockedSecondaryRoles"></a>

```python
blocked_secondary_roles: SessionPolicyBlockedSecondaryRoles
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles">SessionPolicyBlockedSecondaryRoles</a>

blocked_secondary_roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#blocked_secondary_roles SessionPolicy#blocked_secondary_roles}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the session policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#comment SessionPolicy#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#id SessionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `session_idle_timeout_mins`<sup>Optional</sup> <a name="session_idle_timeout_mins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.sessionIdleTimeoutMins"></a>

```python
session_idle_timeout_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

For Snowflake clients and programmatic clients, specifies the number of minutes in which a session can be idle before users must authenticate to Snowflake again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#session_idle_timeout_mins SessionPolicy#session_idle_timeout_mins}

---

##### `session_ui_idle_timeout_mins`<sup>Optional</sup> <a name="session_ui_idle_timeout_mins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.sessionUiIdleTimeoutMins"></a>

```python
session_ui_idle_timeout_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

For Snowsight, specifies the number of minutes in which a session can be idle before users must authenticate to Snowflake again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#session_ui_idle_timeout_mins SessionPolicy#session_ui_idle_timeout_mins}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyConfig.property.timeouts"></a>

```python
timeouts: SessionPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts">SessionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#timeouts SessionPolicy#timeouts}

---

### SessionPolicyDescribeOutput <a name="SessionPolicyDescribeOutput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import session_policy

sessionPolicy.SessionPolicyDescribeOutput()
```


### SessionPolicyShowOutput <a name="SessionPolicyShowOutput" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import session_policy

sessionPolicy.SessionPolicyShowOutput()
```


### SessionPolicyTimeouts <a name="SessionPolicyTimeouts" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import session_policy

sessionPolicy.SessionPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#create SessionPolicy#create}. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#delete SessionPolicy#delete}. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#read SessionPolicy#read}. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#update SessionPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#create SessionPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#delete SessionPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#read SessionPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/session_policy#update SessionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SessionPolicyAllowedSecondaryRolesOutputReference <a name="SessionPolicyAllowedSecondaryRolesOutputReference" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import session_policy

sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resetAll">reset_all</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resetNone">reset_none</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resetRoles">reset_roles</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all` <a name="reset_all" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resetAll"></a>

```python
def reset_all() -> None
```

##### `reset_none` <a name="reset_none" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resetNone"></a>

```python
def reset_none() -> None
```

##### `reset_roles` <a name="reset_roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.resetRoles"></a>

```python
def reset_roles() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.allInput">all_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.noneInput">none_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.rolesInput">roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.all">all</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.none">none</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles">SessionPolicyAllowedSecondaryRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_input`<sup>Optional</sup> <a name="all_input" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.allInput"></a>

```python
all_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `none_input`<sup>Optional</sup> <a name="none_input" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.noneInput"></a>

```python
none_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.rolesInput"></a>

```python
roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.all"></a>

```python
all: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.none"></a>

```python
none: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRolesOutputReference.property.internalValue"></a>

```python
internal_value: SessionPolicyAllowedSecondaryRoles
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyAllowedSecondaryRoles">SessionPolicyAllowedSecondaryRoles</a>

---


### SessionPolicyBlockedSecondaryRolesOutputReference <a name="SessionPolicyBlockedSecondaryRolesOutputReference" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import session_policy

sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resetAll">reset_all</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resetNone">reset_none</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resetRoles">reset_roles</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all` <a name="reset_all" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resetAll"></a>

```python
def reset_all() -> None
```

##### `reset_none` <a name="reset_none" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resetNone"></a>

```python
def reset_none() -> None
```

##### `reset_roles` <a name="reset_roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.resetRoles"></a>

```python
def reset_roles() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.allInput">all_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.noneInput">none_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.rolesInput">roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.all">all</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.none">none</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles">SessionPolicyBlockedSecondaryRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_input`<sup>Optional</sup> <a name="all_input" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.allInput"></a>

```python
all_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `none_input`<sup>Optional</sup> <a name="none_input" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.noneInput"></a>

```python
none_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.rolesInput"></a>

```python
roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.all"></a>

```python
all: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.none"></a>

```python
none: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRolesOutputReference.property.internalValue"></a>

```python
internal_value: SessionPolicyBlockedSecondaryRoles
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyBlockedSecondaryRoles">SessionPolicyBlockedSecondaryRoles</a>

---


### SessionPolicyDescribeOutputList <a name="SessionPolicyDescribeOutputList" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import session_policy

sessionPolicy.SessionPolicyDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SessionPolicyDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SessionPolicyDescribeOutputOutputReference <a name="SessionPolicyDescribeOutputOutputReference" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import session_policy

sessionPolicy.SessionPolicyDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.allowedSecondaryRoles">allowed_secondary_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.blockedSecondaryRoles">blocked_secondary_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.sessionIdleTimeoutMins">session_idle_timeout_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.sessionUiIdleTimeoutMins">session_ui_idle_timeout_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutput">SessionPolicyDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_secondary_roles`<sup>Required</sup> <a name="allowed_secondary_roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.allowedSecondaryRoles"></a>

```python
allowed_secondary_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `blocked_secondary_roles`<sup>Required</sup> <a name="blocked_secondary_roles" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.blockedSecondaryRoles"></a>

```python
blocked_secondary_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `session_idle_timeout_mins`<sup>Required</sup> <a name="session_idle_timeout_mins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.sessionIdleTimeoutMins"></a>

```python
session_idle_timeout_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_ui_idle_timeout_mins`<sup>Required</sup> <a name="session_ui_idle_timeout_mins" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.sessionUiIdleTimeoutMins"></a>

```python
session_ui_idle_timeout_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: SessionPolicyDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyDescribeOutput">SessionPolicyDescribeOutput</a>

---


### SessionPolicyShowOutputList <a name="SessionPolicyShowOutputList" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import session_policy

sessionPolicy.SessionPolicyShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SessionPolicyShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SessionPolicyShowOutputOutputReference <a name="SessionPolicyShowOutputOutputReference" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import session_policy

sessionPolicy.SessionPolicyShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.options">options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutput">SessionPolicyShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.options"></a>

```python
options: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: SessionPolicyShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyShowOutput">SessionPolicyShowOutput</a>

---


### SessionPolicyTimeoutsOutputReference <a name="SessionPolicyTimeoutsOutputReference" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import session_policy

sessionPolicy.SessionPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts">SessionPolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SessionPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.sessionPolicy.SessionPolicyTimeouts">SessionPolicyTimeouts</a>

---



