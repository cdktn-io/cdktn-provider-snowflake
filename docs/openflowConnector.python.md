# `openflowConnector` Submodule <a name="`openflowConnector` Submodule" id="@cdktn/provider-snowflake.openflowConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpenflowConnector <a name="OpenflowConnector" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector snowflake_openflow_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_connector

openflowConnector.OpenflowConnector(
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
  from: OpenflowConnectorFrom,
  name: str,
  runtime: str,
  schema: str,
  comment: str = None,
  display_name: str = None,
  id: str = None,
  timeouts: OpenflowConnectorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the Openflow connector. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.from">from</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a></code> | from block. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the Openflow connector; |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.runtime">runtime</a></code> | <code>str</code> | Specifies the fully qualified name of the Openflow runtime the connector runs in. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the Openflow connector. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the Openflow connector. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A free-text alias for the connector. Shown in the Openflow UI in place of the connector's identifier when set. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#id OpenflowConnector#id}. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the Openflow connector.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#database OpenflowConnector#database}

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.from"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a>

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#from OpenflowConnector#from}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the Openflow connector;

must be unique for the schema in which the connector is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#name OpenflowConnector#name}

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.runtime"></a>

- *Type:* str

Specifies the fully qualified name of the Openflow runtime the connector runs in.

The connector is created in the runtime's schema, so `database` and `schema` must match it. Snowflake has no ALTER for it, so changing it recreates the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#runtime OpenflowConnector#runtime}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the Openflow connector.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#schema OpenflowConnector#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the Openflow connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#comment OpenflowConnector#comment}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.displayName"></a>

- *Type:* str

A free-text alias for the connector. Shown in the Openflow UI in place of the connector's identifier when set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#display_name OpenflowConnector#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#id OpenflowConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#timeouts OpenflowConnector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putFrom">put_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_from` <a name="put_from" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putFrom"></a>

```python
def put_from(
  definition: str = None,
  path: str = None,
  stage: str = None
) -> None
```

###### `definition`<sup>Optional</sup> <a name="definition" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putFrom.parameter.definition"></a>

- *Type:* str

Catalog definition ID for the connector type, for example `OPENFLOW_POSTGRES_CDC`.

List the available IDs with the `snowflake_openflow_connector_definitions` data source. A connector created this way is a draft: it settles on STOPPED and stays there until a configuration version is committed, which this resource does not do.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#definition OpenflowConnector#definition}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putFrom.parameter.path"></a>

- *Type:* str

Path to the bundle within the stage. The bundle's root is used when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#path OpenflowConnector#path}

---

###### `stage`<sup>Optional</sup> <a name="stage" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putFrom.parameter.stage"></a>

- *Type:* str

Identifier of a stage holding a complete configuration bundle, which is how a connector arrives already configured and able to start without a commit.

A git repository stage works here too.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#stage OpenflowConnector#stage}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#create OpenflowConnector#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#delete OpenflowConnector#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#read OpenflowConnector#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#update OpenflowConnector#update}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OpenflowConnector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isConstruct"></a>

```python
from cdktn_provider_snowflake import openflow_connector

openflowConnector.OpenflowConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import openflow_connector

openflowConnector.OpenflowConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import openflow_connector

openflowConnector.OpenflowConnector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import openflow_connector

openflowConnector.OpenflowConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OpenflowConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OpenflowConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OpenflowConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OpenflowConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList">OpenflowConnectorDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.from">from</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference">OpenflowConnectorFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList">OpenflowConnectorShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference">OpenflowConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.fromInput">from_input</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.runtimeInput">runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.schema">schema</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.describeOutput"></a>

```python
describe_output: OpenflowConnectorDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList">OpenflowConnectorDescribeOutputList</a>

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.from"></a>

```python
from: OpenflowConnectorFromOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference">OpenflowConnectorFromOutputReference</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.showOutput"></a>

```python
show_output: OpenflowConnectorShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList">OpenflowConnectorShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.timeouts"></a>

```python
timeouts: OpenflowConnectorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference">OpenflowConnectorTimeoutsOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.fromInput"></a>

```python
from_input: OpenflowConnectorFrom
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.runtimeInput"></a>

```python
runtime_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | OpenflowConnectorTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpenflowConnectorConfig <a name="OpenflowConnectorConfig" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_connector

openflowConnector.OpenflowConnectorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database: str,
  from: OpenflowConnectorFrom,
  name: str,
  runtime: str,
  schema: str,
  comment: str = None,
  display_name: str = None,
  id: str = None,
  timeouts: OpenflowConnectorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the Openflow connector. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.from">from</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a></code> | from block. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the Openflow connector; |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.runtime">runtime</a></code> | <code>str</code> | Specifies the fully qualified name of the Openflow runtime the connector runs in. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the Openflow connector. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the Openflow connector. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.displayName">display_name</a></code> | <code>str</code> | A free-text alias for the connector. Shown in the Openflow UI in place of the connector's identifier when set. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#id OpenflowConnector#id}. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the Openflow connector.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#database OpenflowConnector#database}

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.from"></a>

```python
from: OpenflowConnectorFrom
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a>

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#from OpenflowConnector#from}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the Openflow connector;

must be unique for the schema in which the connector is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#name OpenflowConnector#name}

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

Specifies the fully qualified name of the Openflow runtime the connector runs in.

The connector is created in the runtime's schema, so `database` and `schema` must match it. Snowflake has no ALTER for it, so changing it recreates the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#runtime OpenflowConnector#runtime}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the Openflow connector.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#schema OpenflowConnector#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the Openflow connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#comment OpenflowConnector#comment}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A free-text alias for the connector. Shown in the Openflow UI in place of the connector's identifier when set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#display_name OpenflowConnector#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#id OpenflowConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.timeouts"></a>

```python
timeouts: OpenflowConnectorTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#timeouts OpenflowConnector#timeouts}

---

### OpenflowConnectorDescribeOutput <a name="OpenflowConnectorDescribeOutput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_connector

openflowConnector.OpenflowConnectorDescribeOutput()
```


### OpenflowConnectorFrom <a name="OpenflowConnectorFrom" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_connector

openflowConnector.OpenflowConnectorFrom(
  definition: str = None,
  path: str = None,
  stage: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.property.definition">definition</a></code> | <code>str</code> | Catalog definition ID for the connector type, for example `OPENFLOW_POSTGRES_CDC`. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.property.path">path</a></code> | <code>str</code> | Path to the bundle within the stage. The bundle's root is used when omitted. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.property.stage">stage</a></code> | <code>str</code> | Identifier of a stage holding a complete configuration bundle, which is how a connector arrives already configured and able to start without a commit. |

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.property.definition"></a>

```python
definition: str
```

- *Type:* str

Catalog definition ID for the connector type, for example `OPENFLOW_POSTGRES_CDC`.

List the available IDs with the `snowflake_openflow_connector_definitions` data source. A connector created this way is a draft: it settles on STOPPED and stays there until a configuration version is committed, which this resource does not do.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#definition OpenflowConnector#definition}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.property.path"></a>

```python
path: str
```

- *Type:* str

Path to the bundle within the stage. The bundle's root is used when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#path OpenflowConnector#path}

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.property.stage"></a>

```python
stage: str
```

- *Type:* str

Identifier of a stage holding a complete configuration bundle, which is how a connector arrives already configured and able to start without a commit.

A git repository stage works here too.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#stage OpenflowConnector#stage}

---

### OpenflowConnectorShowOutput <a name="OpenflowConnectorShowOutput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_connector

openflowConnector.OpenflowConnectorShowOutput()
```


### OpenflowConnectorTimeouts <a name="OpenflowConnectorTimeouts" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_connector

openflowConnector.OpenflowConnectorTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#create OpenflowConnector#create}. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#delete OpenflowConnector#delete}. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#read OpenflowConnector#read}. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#update OpenflowConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#create OpenflowConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#delete OpenflowConnector#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#read OpenflowConnector#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#update OpenflowConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpenflowConnectorDescribeOutputList <a name="OpenflowConnectorDescribeOutputList" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_connector

openflowConnector.OpenflowConnectorDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpenflowConnectorDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OpenflowConnectorDescribeOutputOutputReference <a name="OpenflowConnectorDescribeOutputOutputReference" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_connector

openflowConnector.OpenflowConnectorDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.connectorDefinition">connector_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.connectorUrl">connector_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersion">default_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionAlias">default_version_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionGitCommitHash">default_version_git_commit_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionLocationUri">default_version_location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionName">default_version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionSourceLocationUri">default_version_source_location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionAlias">last_version_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionGitCommitHash">last_version_git_commit_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionLocationUri">last_version_location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionName">last_version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionSourceLocationUri">last_version_source_location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.liveVersionLocationUri">live_version_location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutput">OpenflowConnectorDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `connector_definition`<sup>Required</sup> <a name="connector_definition" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.connectorDefinition"></a>

```python
connector_definition: str
```

- *Type:* str

---

##### `connector_url`<sup>Required</sup> <a name="connector_url" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.connectorUrl"></a>

```python
connector_url: str
```

- *Type:* str

---

##### `default_version`<sup>Required</sup> <a name="default_version" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersion"></a>

```python
default_version: str
```

- *Type:* str

---

##### `default_version_alias`<sup>Required</sup> <a name="default_version_alias" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionAlias"></a>

```python
default_version_alias: str
```

- *Type:* str

---

##### `default_version_git_commit_hash`<sup>Required</sup> <a name="default_version_git_commit_hash" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionGitCommitHash"></a>

```python
default_version_git_commit_hash: str
```

- *Type:* str

---

##### `default_version_location_uri`<sup>Required</sup> <a name="default_version_location_uri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionLocationUri"></a>

```python
default_version_location_uri: str
```

- *Type:* str

---

##### `default_version_name`<sup>Required</sup> <a name="default_version_name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionName"></a>

```python
default_version_name: str
```

- *Type:* str

---

##### `default_version_source_location_uri`<sup>Required</sup> <a name="default_version_source_location_uri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionSourceLocationUri"></a>

```python
default_version_source_location_uri: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `last_version_alias`<sup>Required</sup> <a name="last_version_alias" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionAlias"></a>

```python
last_version_alias: str
```

- *Type:* str

---

##### `last_version_git_commit_hash`<sup>Required</sup> <a name="last_version_git_commit_hash" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionGitCommitHash"></a>

```python
last_version_git_commit_hash: str
```

- *Type:* str

---

##### `last_version_location_uri`<sup>Required</sup> <a name="last_version_location_uri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionLocationUri"></a>

```python
last_version_location_uri: str
```

- *Type:* str

---

##### `last_version_name`<sup>Required</sup> <a name="last_version_name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionName"></a>

```python
last_version_name: str
```

- *Type:* str

---

##### `last_version_source_location_uri`<sup>Required</sup> <a name="last_version_source_location_uri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionSourceLocationUri"></a>

```python
last_version_source_location_uri: str
```

- *Type:* str

---

##### `live_version_location_uri`<sup>Required</sup> <a name="live_version_location_uri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.liveVersionLocationUri"></a>

```python
live_version_location_uri: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: OpenflowConnectorDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutput">OpenflowConnectorDescribeOutput</a>

---


### OpenflowConnectorFromOutputReference <a name="OpenflowConnectorFromOutputReference" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_connector

openflowConnector.OpenflowConnectorFromOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resetDefinition">reset_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resetStage">reset_stage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_definition` <a name="reset_definition" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resetDefinition"></a>

```python
def reset_definition() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_stage` <a name="reset_stage" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resetStage"></a>

```python
def reset_stage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.definitionInput">definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.stageInput">stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.definition">definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.stage">stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `definition_input`<sup>Optional</sup> <a name="definition_input" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.definitionInput"></a>

```python
definition_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `stage_input`<sup>Optional</sup> <a name="stage_input" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.stageInput"></a>

```python
stage_input: str
```

- *Type:* str

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.definition"></a>

```python
definition: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.stage"></a>

```python
stage: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.internalValue"></a>

```python
internal_value: OpenflowConnectorFrom
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a>

---


### OpenflowConnectorShowOutputList <a name="OpenflowConnectorShowOutputList" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_connector

openflowConnector.OpenflowConnectorShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpenflowConnectorShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OpenflowConnectorShowOutputOutputReference <a name="OpenflowConnectorShowOutputOutputReference" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_connector

openflowConnector.OpenflowConnectorShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.connectorDefinition">connector_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.connectorUrl">connector_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersion">default_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionAlias">default_version_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionLocationUri">default_version_location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionName">default_version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionSourceLocationUri">default_version_source_location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.liveVersionLocationUri">live_version_location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.updatedOn">updated_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutput">OpenflowConnectorShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `connector_definition`<sup>Required</sup> <a name="connector_definition" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.connectorDefinition"></a>

```python
connector_definition: str
```

- *Type:* str

---

##### `connector_url`<sup>Required</sup> <a name="connector_url" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.connectorUrl"></a>

```python
connector_url: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `default_version`<sup>Required</sup> <a name="default_version" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersion"></a>

```python
default_version: str
```

- *Type:* str

---

##### `default_version_alias`<sup>Required</sup> <a name="default_version_alias" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionAlias"></a>

```python
default_version_alias: str
```

- *Type:* str

---

##### `default_version_location_uri`<sup>Required</sup> <a name="default_version_location_uri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionLocationUri"></a>

```python
default_version_location_uri: str
```

- *Type:* str

---

##### `default_version_name`<sup>Required</sup> <a name="default_version_name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionName"></a>

```python
default_version_name: str
```

- *Type:* str

---

##### `default_version_source_location_uri`<sup>Required</sup> <a name="default_version_source_location_uri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionSourceLocationUri"></a>

```python
default_version_source_location_uri: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `live_version_location_uri`<sup>Required</sup> <a name="live_version_location_uri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.liveVersionLocationUri"></a>

```python
live_version_location_uri: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `updated_on`<sup>Required</sup> <a name="updated_on" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.updatedOn"></a>

```python
updated_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: OpenflowConnectorShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutput">OpenflowConnectorShowOutput</a>

---


### OpenflowConnectorTimeoutsOutputReference <a name="OpenflowConnectorTimeoutsOutputReference" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_connector

openflowConnector.OpenflowConnectorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpenflowConnectorTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a>

---



