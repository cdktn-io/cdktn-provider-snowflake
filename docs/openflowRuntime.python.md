# `openflowRuntime` Submodule <a name="`openflowRuntime` Submodule" id="@cdktn/provider-snowflake.openflowRuntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpenflowRuntime <a name="OpenflowRuntime" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime snowflake_openflow_runtime}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_runtime

openflowRuntime.OpenflowRuntime(
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
  deployment: str,
  execute_as_role: str,
  max_nodes: typing.Union[int, float],
  min_nodes: typing.Union[int, float],
  name: str,
  node_type: str,
  schema: str,
  comment: str = None,
  display_name: str = None,
  external_access_integrations: typing.List[str] = None,
  id: str = None,
  timeouts: OpenflowRuntimeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the Openflow runtime. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.deployment">deployment</a></code> | <code>str</code> | Specifies the Openflow deployment the runtime runs in. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.executeAsRole">execute_as_role</a></code> | <code>str</code> | Specifies the role the runtime executes as. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.maxNodes">max_nodes</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum number of nodes the runtime scales up to. For more information, check [CREATE OPENFLOW RUNTIME documentation](https://docs.snowflake.com/en/sql-reference/sql/create-openflow-runtime). |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.minNodes">min_nodes</a></code> | <code>typing.Union[int, float]</code> | Specifies the minimum number of nodes the runtime scales down to. For more information, check [CREATE OPENFLOW RUNTIME documentation](https://docs.snowflake.com/en/sql-reference/sql/create-openflow-runtime). |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the Openflow runtime; |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.nodeType">node_type</a></code> | <code>str</code> | Specifies the size of the runtime's nodes. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the Openflow runtime. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the Openflow runtime. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A free-text alias for the runtime. Shown in the Openflow UI in place of the runtime's identifier when set. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.externalAccessIntegrations">external_access_integrations</a></code> | <code>typing.List[str]</code> | Specifies the names of the external access integrations that allow the runtime egress to external data sources. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#id OpenflowRuntime#id}. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the Openflow runtime.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#database OpenflowRuntime#database}

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.deployment"></a>

- *Type:* str

Specifies the Openflow deployment the runtime runs in.

Snowflake has no ALTER for it, so changing it recreates the runtime. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#deployment OpenflowRuntime#deployment}

---

##### `execute_as_role`<sup>Required</sup> <a name="execute_as_role" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.executeAsRole"></a>

- *Type:* str

Specifies the role the runtime executes as.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#execute_as_role OpenflowRuntime#execute_as_role}

---

##### `max_nodes`<sup>Required</sup> <a name="max_nodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.maxNodes"></a>

- *Type:* typing.Union[int, float]

Specifies the maximum number of nodes the runtime scales up to. For more information, check [CREATE OPENFLOW RUNTIME documentation](https://docs.snowflake.com/en/sql-reference/sql/create-openflow-runtime).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#max_nodes OpenflowRuntime#max_nodes}

---

##### `min_nodes`<sup>Required</sup> <a name="min_nodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.minNodes"></a>

- *Type:* typing.Union[int, float]

Specifies the minimum number of nodes the runtime scales down to. For more information, check [CREATE OPENFLOW RUNTIME documentation](https://docs.snowflake.com/en/sql-reference/sql/create-openflow-runtime).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#min_nodes OpenflowRuntime#min_nodes}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the Openflow runtime;

must be unique for the schema in which the runtime is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#name OpenflowRuntime#name}

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.nodeType"></a>

- *Type:* str

Specifies the size of the runtime's nodes.

Snowflake has no ALTER for it, so changing it recreates the runtime. Valid values are (case-insensitive): `SMALL` | `MEDIUM` | `LARGE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#node_type OpenflowRuntime#node_type}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the Openflow runtime.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#schema OpenflowRuntime#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the Openflow runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#comment OpenflowRuntime#comment}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.displayName"></a>

- *Type:* str

A free-text alias for the runtime. Shown in the Openflow UI in place of the runtime's identifier when set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#display_name OpenflowRuntime#display_name}

---

##### `external_access_integrations`<sup>Optional</sup> <a name="external_access_integrations" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.externalAccessIntegrations"></a>

- *Type:* typing.List[str]

Specifies the names of the external access integrations that allow the runtime egress to external data sources.

Supported for Snowflake-managed deployments only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#external_access_integrations OpenflowRuntime#external_access_integrations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#id OpenflowRuntime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#timeouts OpenflowRuntime#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetExternalAccessIntegrations">reset_external_access_integrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#create OpenflowRuntime#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#delete OpenflowRuntime#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#read OpenflowRuntime#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#update OpenflowRuntime#update}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_external_access_integrations` <a name="reset_external_access_integrations" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetExternalAccessIntegrations"></a>

```python
def reset_external_access_integrations() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OpenflowRuntime resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isConstruct"></a>

```python
from cdktn_provider_snowflake import openflow_runtime

openflowRuntime.OpenflowRuntime.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import openflow_runtime

openflowRuntime.OpenflowRuntime.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import openflow_runtime

openflowRuntime.OpenflowRuntime.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import openflow_runtime

openflowRuntime.OpenflowRuntime.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OpenflowRuntime resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OpenflowRuntime to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OpenflowRuntime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OpenflowRuntime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList">OpenflowRuntimeDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList">OpenflowRuntimeShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference">OpenflowRuntimeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.deploymentInput">deployment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.executeAsRoleInput">execute_as_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.externalAccessIntegrationsInput">external_access_integrations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.maxNodesInput">max_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.minNodesInput">min_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.nodeTypeInput">node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.deployment">deployment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.executeAsRole">execute_as_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.externalAccessIntegrations">external_access_integrations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.maxNodes">max_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.minNodes">min_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.schema">schema</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.describeOutput"></a>

```python
describe_output: OpenflowRuntimeDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList">OpenflowRuntimeDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.showOutput"></a>

```python
show_output: OpenflowRuntimeShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList">OpenflowRuntimeShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.timeouts"></a>

```python
timeouts: OpenflowRuntimeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference">OpenflowRuntimeTimeoutsOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `deployment_input`<sup>Optional</sup> <a name="deployment_input" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.deploymentInput"></a>

```python
deployment_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `execute_as_role_input`<sup>Optional</sup> <a name="execute_as_role_input" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.executeAsRoleInput"></a>

```python
execute_as_role_input: str
```

- *Type:* str

---

##### `external_access_integrations_input`<sup>Optional</sup> <a name="external_access_integrations_input" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.externalAccessIntegrationsInput"></a>

```python
external_access_integrations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_nodes_input`<sup>Optional</sup> <a name="max_nodes_input" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.maxNodesInput"></a>

```python
max_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_nodes_input`<sup>Optional</sup> <a name="min_nodes_input" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.minNodesInput"></a>

```python
min_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_type_input`<sup>Optional</sup> <a name="node_type_input" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.nodeTypeInput"></a>

```python
node_type_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | OpenflowRuntimeTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.deployment"></a>

```python
deployment: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `execute_as_role`<sup>Required</sup> <a name="execute_as_role" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.executeAsRole"></a>

```python
execute_as_role: str
```

- *Type:* str

---

##### `external_access_integrations`<sup>Required</sup> <a name="external_access_integrations" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.externalAccessIntegrations"></a>

```python
external_access_integrations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_nodes`<sup>Required</sup> <a name="max_nodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.maxNodes"></a>

```python
max_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_nodes`<sup>Required</sup> <a name="min_nodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.minNodes"></a>

```python
min_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpenflowRuntimeConfig <a name="OpenflowRuntimeConfig" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_runtime

openflowRuntime.OpenflowRuntimeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database: str,
  deployment: str,
  execute_as_role: str,
  max_nodes: typing.Union[int, float],
  min_nodes: typing.Union[int, float],
  name: str,
  node_type: str,
  schema: str,
  comment: str = None,
  display_name: str = None,
  external_access_integrations: typing.List[str] = None,
  id: str = None,
  timeouts: OpenflowRuntimeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the Openflow runtime. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.deployment">deployment</a></code> | <code>str</code> | Specifies the Openflow deployment the runtime runs in. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.executeAsRole">execute_as_role</a></code> | <code>str</code> | Specifies the role the runtime executes as. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.maxNodes">max_nodes</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum number of nodes the runtime scales up to. For more information, check [CREATE OPENFLOW RUNTIME documentation](https://docs.snowflake.com/en/sql-reference/sql/create-openflow-runtime). |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.minNodes">min_nodes</a></code> | <code>typing.Union[int, float]</code> | Specifies the minimum number of nodes the runtime scales down to. For more information, check [CREATE OPENFLOW RUNTIME documentation](https://docs.snowflake.com/en/sql-reference/sql/create-openflow-runtime). |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the Openflow runtime; |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.nodeType">node_type</a></code> | <code>str</code> | Specifies the size of the runtime's nodes. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the Openflow runtime. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the Openflow runtime. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.displayName">display_name</a></code> | <code>str</code> | A free-text alias for the runtime. Shown in the Openflow UI in place of the runtime's identifier when set. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.externalAccessIntegrations">external_access_integrations</a></code> | <code>typing.List[str]</code> | Specifies the names of the external access integrations that allow the runtime egress to external data sources. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#id OpenflowRuntime#id}. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the Openflow runtime.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#database OpenflowRuntime#database}

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.deployment"></a>

```python
deployment: str
```

- *Type:* str

Specifies the Openflow deployment the runtime runs in.

Snowflake has no ALTER for it, so changing it recreates the runtime. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#deployment OpenflowRuntime#deployment}

---

##### `execute_as_role`<sup>Required</sup> <a name="execute_as_role" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.executeAsRole"></a>

```python
execute_as_role: str
```

- *Type:* str

Specifies the role the runtime executes as.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#execute_as_role OpenflowRuntime#execute_as_role}

---

##### `max_nodes`<sup>Required</sup> <a name="max_nodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.maxNodes"></a>

```python
max_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum number of nodes the runtime scales up to. For more information, check [CREATE OPENFLOW RUNTIME documentation](https://docs.snowflake.com/en/sql-reference/sql/create-openflow-runtime).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#max_nodes OpenflowRuntime#max_nodes}

---

##### `min_nodes`<sup>Required</sup> <a name="min_nodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.minNodes"></a>

```python
min_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the minimum number of nodes the runtime scales down to. For more information, check [CREATE OPENFLOW RUNTIME documentation](https://docs.snowflake.com/en/sql-reference/sql/create-openflow-runtime).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#min_nodes OpenflowRuntime#min_nodes}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the Openflow runtime;

must be unique for the schema in which the runtime is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#name OpenflowRuntime#name}

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

Specifies the size of the runtime's nodes.

Snowflake has no ALTER for it, so changing it recreates the runtime. Valid values are (case-insensitive): `SMALL` | `MEDIUM` | `LARGE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#node_type OpenflowRuntime#node_type}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the Openflow runtime.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#schema OpenflowRuntime#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the Openflow runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#comment OpenflowRuntime#comment}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A free-text alias for the runtime. Shown in the Openflow UI in place of the runtime's identifier when set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#display_name OpenflowRuntime#display_name}

---

##### `external_access_integrations`<sup>Optional</sup> <a name="external_access_integrations" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.externalAccessIntegrations"></a>

```python
external_access_integrations: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the names of the external access integrations that allow the runtime egress to external data sources.

Supported for Snowflake-managed deployments only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#external_access_integrations OpenflowRuntime#external_access_integrations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#id OpenflowRuntime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.timeouts"></a>

```python
timeouts: OpenflowRuntimeTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#timeouts OpenflowRuntime#timeouts}

---

### OpenflowRuntimeDescribeOutput <a name="OpenflowRuntimeDescribeOutput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_runtime

openflowRuntime.OpenflowRuntimeDescribeOutput()
```


### OpenflowRuntimeShowOutput <a name="OpenflowRuntimeShowOutput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_runtime

openflowRuntime.OpenflowRuntimeShowOutput()
```


### OpenflowRuntimeTimeouts <a name="OpenflowRuntimeTimeouts" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_runtime

openflowRuntime.OpenflowRuntimeTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#create OpenflowRuntime#create}. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#delete OpenflowRuntime#delete}. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#read OpenflowRuntime#read}. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#update OpenflowRuntime#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#create OpenflowRuntime#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#delete OpenflowRuntime#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#read OpenflowRuntime#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#update OpenflowRuntime#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpenflowRuntimeDescribeOutputList <a name="OpenflowRuntimeDescribeOutputList" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_runtime

openflowRuntime.OpenflowRuntimeDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpenflowRuntimeDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OpenflowRuntimeDescribeOutputOutputReference <a name="OpenflowRuntimeDescribeOutputOutputReference" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_runtime

openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.deployment">deployment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.executeAsRole">execute_as_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.externalAccessIntegrations">external_access_integrations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.initiallySuspended">initially_suspended</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.maxNodes">max_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.minNodes">min_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.nodeTypeTier">node_type_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.serverUrl">server_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutput">OpenflowRuntimeDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.deployment"></a>

```python
deployment: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `execute_as_role`<sup>Required</sup> <a name="execute_as_role" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.executeAsRole"></a>

```python
execute_as_role: str
```

- *Type:* str

---

##### `external_access_integrations`<sup>Required</sup> <a name="external_access_integrations" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.externalAccessIntegrations"></a>

```python
external_access_integrations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `initially_suspended`<sup>Required</sup> <a name="initially_suspended" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.initiallySuspended"></a>

```python
initially_suspended: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `max_nodes`<sup>Required</sup> <a name="max_nodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.maxNodes"></a>

```python
max_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_nodes`<sup>Required</sup> <a name="min_nodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.minNodes"></a>

```python
min_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `node_type_tier`<sup>Required</sup> <a name="node_type_tier" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.nodeTypeTier"></a>

```python
node_type_tier: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `server_url`<sup>Required</sup> <a name="server_url" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.serverUrl"></a>

```python
server_url: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: OpenflowRuntimeDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutput">OpenflowRuntimeDescribeOutput</a>

---


### OpenflowRuntimeShowOutputList <a name="OpenflowRuntimeShowOutputList" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_runtime

openflowRuntime.OpenflowRuntimeShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpenflowRuntimeShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OpenflowRuntimeShowOutputOutputReference <a name="OpenflowRuntimeShowOutputOutputReference" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_runtime

openflowRuntime.OpenflowRuntimeShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.deployment">deployment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.executeAsRole">execute_as_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.externalAccessIntegrations">external_access_integrations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.initiallySuspended">initially_suspended</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.maxNodes">max_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.minNodes">min_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.updatedOn">updated_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutput">OpenflowRuntimeShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.deployment"></a>

```python
deployment: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `execute_as_role`<sup>Required</sup> <a name="execute_as_role" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.executeAsRole"></a>

```python
execute_as_role: str
```

- *Type:* str

---

##### `external_access_integrations`<sup>Required</sup> <a name="external_access_integrations" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.externalAccessIntegrations"></a>

```python
external_access_integrations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `initially_suspended`<sup>Required</sup> <a name="initially_suspended" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.initiallySuspended"></a>

```python
initially_suspended: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `max_nodes`<sup>Required</sup> <a name="max_nodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.maxNodes"></a>

```python
max_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_nodes`<sup>Required</sup> <a name="min_nodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.minNodes"></a>

```python
min_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `updated_on`<sup>Required</sup> <a name="updated_on" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.updatedOn"></a>

```python
updated_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: OpenflowRuntimeShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutput">OpenflowRuntimeShowOutput</a>

---


### OpenflowRuntimeTimeoutsOutputReference <a name="OpenflowRuntimeTimeoutsOutputReference" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import openflow_runtime

openflowRuntime.OpenflowRuntimeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpenflowRuntimeTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a>

---



