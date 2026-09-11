# `openflowDeploymentSnowflakeManaged` Submodule <a name="`openflowDeploymentSnowflakeManaged` Submodule" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpenflowDeploymentSnowflakeManaged <a name="OpenflowDeploymentSnowflakeManaged" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed snowflake_openflow_deployment_snowflake_managed}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_snowflake_managed

openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  comment: str = None,
  display_name: str = None,
  event_table: str = None,
  id: str = None,
  timeouts: OpenflowDeploymentSnowflakeManagedTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the Openflow deployment; |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the Openflow deployment. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A free-text alias for the deployment. Shown in the Openflow UI in place of the deployment's identifier when set. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.eventTable">event_table</a></code> | <code>str</code> | Fully qualified name of an event table the deployment logs to. For more information, check [EVENT_TABLE documentation](https://docs.snowflake.com/en/sql-reference/parameters#event-table). |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#id OpenflowDeploymentSnowflakeManaged#id}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the Openflow deployment;

must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#name OpenflowDeploymentSnowflakeManaged#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the Openflow deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#comment OpenflowDeploymentSnowflakeManaged#comment}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.displayName"></a>

- *Type:* str

A free-text alias for the deployment. Shown in the Openflow UI in place of the deployment's identifier when set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#display_name OpenflowDeploymentSnowflakeManaged#display_name}

---

##### `event_table`<sup>Optional</sup> <a name="event_table" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.eventTable"></a>

- *Type:* str

Fully qualified name of an event table the deployment logs to. For more information, check [EVENT_TABLE documentation](https://docs.snowflake.com/en/sql-reference/parameters#event-table).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#event_table OpenflowDeploymentSnowflakeManaged#event_table}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#id OpenflowDeploymentSnowflakeManaged#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#timeouts OpenflowDeploymentSnowflakeManaged#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetEventTable">reset_event_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#create OpenflowDeploymentSnowflakeManaged#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#delete OpenflowDeploymentSnowflakeManaged#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#read OpenflowDeploymentSnowflakeManaged#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#update OpenflowDeploymentSnowflakeManaged#update}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_event_table` <a name="reset_event_table" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetEventTable"></a>

```python
def reset_event_table() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OpenflowDeploymentSnowflakeManaged resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isConstruct"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_snowflake_managed

openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_snowflake_managed

openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_snowflake_managed

openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_snowflake_managed

openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OpenflowDeploymentSnowflakeManaged resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OpenflowDeploymentSnowflakeManaged to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OpenflowDeploymentSnowflakeManaged that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OpenflowDeploymentSnowflakeManaged to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList">OpenflowDeploymentSnowflakeManagedDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList">OpenflowDeploymentSnowflakeManagedParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList">OpenflowDeploymentSnowflakeManagedShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference">OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.eventTableInput">event_table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.eventTable">event_table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.describeOutput"></a>

```python
describe_output: OpenflowDeploymentSnowflakeManagedDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList">OpenflowDeploymentSnowflakeManagedDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.parameters"></a>

```python
parameters: OpenflowDeploymentSnowflakeManagedParametersList
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList">OpenflowDeploymentSnowflakeManagedParametersList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.showOutput"></a>

```python
show_output: OpenflowDeploymentSnowflakeManagedShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList">OpenflowDeploymentSnowflakeManagedShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.timeouts"></a>

```python
timeouts: OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference">OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `event_table_input`<sup>Optional</sup> <a name="event_table_input" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.eventTableInput"></a>

```python
event_table_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | OpenflowDeploymentSnowflakeManagedTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `event_table`<sup>Required</sup> <a name="event_table" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.eventTable"></a>

```python
event_table: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpenflowDeploymentSnowflakeManagedConfig <a name="OpenflowDeploymentSnowflakeManagedConfig" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_snowflake_managed

openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  comment: str = None,
  display_name: str = None,
  event_table: str = None,
  id: str = None,
  timeouts: OpenflowDeploymentSnowflakeManagedTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the Openflow deployment; |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the Openflow deployment. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.displayName">display_name</a></code> | <code>str</code> | A free-text alias for the deployment. Shown in the Openflow UI in place of the deployment's identifier when set. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.eventTable">event_table</a></code> | <code>str</code> | Fully qualified name of an event table the deployment logs to. For more information, check [EVENT_TABLE documentation](https://docs.snowflake.com/en/sql-reference/parameters#event-table). |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#id OpenflowDeploymentSnowflakeManaged#id}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the Openflow deployment;

must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#name OpenflowDeploymentSnowflakeManaged#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the Openflow deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#comment OpenflowDeploymentSnowflakeManaged#comment}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A free-text alias for the deployment. Shown in the Openflow UI in place of the deployment's identifier when set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#display_name OpenflowDeploymentSnowflakeManaged#display_name}

---

##### `event_table`<sup>Optional</sup> <a name="event_table" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.eventTable"></a>

```python
event_table: str
```

- *Type:* str

Fully qualified name of an event table the deployment logs to. For more information, check [EVENT_TABLE documentation](https://docs.snowflake.com/en/sql-reference/parameters#event-table).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#event_table OpenflowDeploymentSnowflakeManaged#event_table}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#id OpenflowDeploymentSnowflakeManaged#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.timeouts"></a>

```python
timeouts: OpenflowDeploymentSnowflakeManagedTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#timeouts OpenflowDeploymentSnowflakeManaged#timeouts}

---

### OpenflowDeploymentSnowflakeManagedDescribeOutput <a name="OpenflowDeploymentSnowflakeManagedDescribeOutput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_snowflake_managed

openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutput()
```


### OpenflowDeploymentSnowflakeManagedParameters <a name="OpenflowDeploymentSnowflakeManagedParameters" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParameters.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_snowflake_managed

openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParameters()
```


### OpenflowDeploymentSnowflakeManagedParametersEventTable <a name="OpenflowDeploymentSnowflakeManagedParametersEventTable" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTable.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_snowflake_managed

openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTable()
```


### OpenflowDeploymentSnowflakeManagedShowOutput <a name="OpenflowDeploymentSnowflakeManagedShowOutput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_snowflake_managed

openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutput()
```


### OpenflowDeploymentSnowflakeManagedTimeouts <a name="OpenflowDeploymentSnowflakeManagedTimeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_snowflake_managed

openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#create OpenflowDeploymentSnowflakeManaged#create}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#delete OpenflowDeploymentSnowflakeManaged#delete}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#read OpenflowDeploymentSnowflakeManaged#read}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#update OpenflowDeploymentSnowflakeManaged#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#create OpenflowDeploymentSnowflakeManaged#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#delete OpenflowDeploymentSnowflakeManaged#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#read OpenflowDeploymentSnowflakeManaged#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#update OpenflowDeploymentSnowflakeManaged#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpenflowDeploymentSnowflakeManagedDescribeOutputList <a name="OpenflowDeploymentSnowflakeManagedDescribeOutputList" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_snowflake_managed

openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference <a name="OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_snowflake_managed

openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.customIngressHostname">custom_ingress_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.usePrivateLink">use_private_link</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.useUserAuthOverPrivateLink">use_user_auth_over_private_link</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.vpcType">vpc_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutput">OpenflowDeploymentSnowflakeManagedDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `custom_ingress_hostname`<sup>Required</sup> <a name="custom_ingress_hostname" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.customIngressHostname"></a>

```python
custom_ingress_hostname: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `use_private_link`<sup>Required</sup> <a name="use_private_link" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.usePrivateLink"></a>

```python
use_private_link: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `use_user_auth_over_private_link`<sup>Required</sup> <a name="use_user_auth_over_private_link" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```python
use_user_auth_over_private_link: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `vpc_type`<sup>Required</sup> <a name="vpc_type" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.vpcType"></a>

```python
vpc_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: OpenflowDeploymentSnowflakeManagedDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutput">OpenflowDeploymentSnowflakeManagedDescribeOutput</a>

---


### OpenflowDeploymentSnowflakeManagedParametersEventTableList <a name="OpenflowDeploymentSnowflakeManagedParametersEventTableList" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_snowflake_managed

openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference <a name="OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_snowflake_managed

openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTable">OpenflowDeploymentSnowflakeManagedParametersEventTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.internalValue"></a>

```python
internal_value: OpenflowDeploymentSnowflakeManagedParametersEventTable
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTable">OpenflowDeploymentSnowflakeManagedParametersEventTable</a>

---


### OpenflowDeploymentSnowflakeManagedParametersList <a name="OpenflowDeploymentSnowflakeManagedParametersList" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_snowflake_managed

openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpenflowDeploymentSnowflakeManagedParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OpenflowDeploymentSnowflakeManagedParametersOutputReference <a name="OpenflowDeploymentSnowflakeManagedParametersOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_snowflake_managed

openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.eventTable">event_table</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList">OpenflowDeploymentSnowflakeManagedParametersEventTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParameters">OpenflowDeploymentSnowflakeManagedParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_table`<sup>Required</sup> <a name="event_table" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.eventTable"></a>

```python
event_table: OpenflowDeploymentSnowflakeManagedParametersEventTableList
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList">OpenflowDeploymentSnowflakeManagedParametersEventTableList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.internalValue"></a>

```python
internal_value: OpenflowDeploymentSnowflakeManagedParameters
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParameters">OpenflowDeploymentSnowflakeManagedParameters</a>

---


### OpenflowDeploymentSnowflakeManagedShowOutputList <a name="OpenflowDeploymentSnowflakeManagedShowOutputList" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_snowflake_managed

openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpenflowDeploymentSnowflakeManagedShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OpenflowDeploymentSnowflakeManagedShowOutputOutputReference <a name="OpenflowDeploymentSnowflakeManagedShowOutputOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_snowflake_managed

openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.customIngressHostname">custom_ingress_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.updatedOn">updated_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.usePrivateLink">use_private_link</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.useUserAuthOverPrivateLink">use_user_auth_over_private_link</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.vpcType">vpc_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutput">OpenflowDeploymentSnowflakeManagedShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `custom_ingress_hostname`<sup>Required</sup> <a name="custom_ingress_hostname" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.customIngressHostname"></a>

```python
custom_ingress_hostname: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated_on`<sup>Required</sup> <a name="updated_on" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.updatedOn"></a>

```python
updated_on: str
```

- *Type:* str

---

##### `use_private_link`<sup>Required</sup> <a name="use_private_link" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.usePrivateLink"></a>

```python
use_private_link: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `use_user_auth_over_private_link`<sup>Required</sup> <a name="use_user_auth_over_private_link" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```python
use_user_auth_over_private_link: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `vpc_type`<sup>Required</sup> <a name="vpc_type" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.vpcType"></a>

```python
vpc_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: OpenflowDeploymentSnowflakeManagedShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutput">OpenflowDeploymentSnowflakeManagedShowOutput</a>

---


### OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference <a name="OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_deployment_snowflake_managed

openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpenflowDeploymentSnowflakeManagedTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a>

---



