# `intelligenceCortexAgentAttachment` Submodule <a name="`intelligenceCortexAgentAttachment` Submodule" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntelligenceCortexAgentAttachment <a name="IntelligenceCortexAgentAttachment" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment snowflake_intelligence_cortex_agent_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer"></a>

```python
from cdktn_provider_snowflake import intelligence_cortex_agent_attachment

intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cortex_agent_name: str,
  snowflake_intelligence_name: str,
  id: str = None,
  timeouts: IntelligenceCortexAgentAttachmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.cortexAgentName">cortex_agent_name</a></code> | <code>str</code> | Fully qualified name of the Cortex agent to attach. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.snowflakeIntelligenceName">snowflake_intelligence_name</a></code> | <code>str</code> | Fully qualified name of the Snowflake Intelligence object to attach the agent to. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#id IntelligenceCortexAgentAttachment#id}. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cortex_agent_name`<sup>Required</sup> <a name="cortex_agent_name" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.cortexAgentName"></a>

- *Type:* str

Fully qualified name of the Cortex agent to attach.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using pipes (`|`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#cortex_agent_name IntelligenceCortexAgentAttachment#cortex_agent_name}

---

##### `snowflake_intelligence_name`<sup>Required</sup> <a name="snowflake_intelligence_name" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.snowflakeIntelligenceName"></a>

- *Type:* str

Fully qualified name of the Snowflake Intelligence object to attach the agent to.

The account default object is SNOWFLAKE_INTELLIGENCE_OBJECT_DEFAULT. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using pipes (`|`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#snowflake_intelligence_name IntelligenceCortexAgentAttachment#snowflake_intelligence_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#id IntelligenceCortexAgentAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#timeouts IntelligenceCortexAgentAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#create IntelligenceCortexAgentAttachment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#delete IntelligenceCortexAgentAttachment#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#read IntelligenceCortexAgentAttachment#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#update IntelligenceCortexAgentAttachment#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IntelligenceCortexAgentAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isConstruct"></a>

```python
from cdktn_provider_snowflake import intelligence_cortex_agent_attachment

intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import intelligence_cortex_agent_attachment

intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import intelligence_cortex_agent_attachment

intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import intelligence_cortex_agent_attachment

intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IntelligenceCortexAgentAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntelligenceCortexAgentAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntelligenceCortexAgentAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IntelligenceCortexAgentAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference">IntelligenceCortexAgentAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.cortexAgentNameInput">cortex_agent_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.snowflakeIntelligenceNameInput">snowflake_intelligence_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.cortexAgentName">cortex_agent_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.snowflakeIntelligenceName">snowflake_intelligence_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.timeouts"></a>

```python
timeouts: IntelligenceCortexAgentAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference">IntelligenceCortexAgentAttachmentTimeoutsOutputReference</a>

---

##### `cortex_agent_name_input`<sup>Optional</sup> <a name="cortex_agent_name_input" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.cortexAgentNameInput"></a>

```python
cortex_agent_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `snowflake_intelligence_name_input`<sup>Optional</sup> <a name="snowflake_intelligence_name_input" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.snowflakeIntelligenceNameInput"></a>

```python
snowflake_intelligence_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | IntelligenceCortexAgentAttachmentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a>

---

##### `cortex_agent_name`<sup>Required</sup> <a name="cortex_agent_name" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.cortexAgentName"></a>

```python
cortex_agent_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `snowflake_intelligence_name`<sup>Required</sup> <a name="snowflake_intelligence_name" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.snowflakeIntelligenceName"></a>

```python
snowflake_intelligence_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntelligenceCortexAgentAttachmentConfig <a name="IntelligenceCortexAgentAttachmentConfig" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import intelligence_cortex_agent_attachment

intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cortex_agent_name: str,
  snowflake_intelligence_name: str,
  id: str = None,
  timeouts: IntelligenceCortexAgentAttachmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.cortexAgentName">cortex_agent_name</a></code> | <code>str</code> | Fully qualified name of the Cortex agent to attach. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.snowflakeIntelligenceName">snowflake_intelligence_name</a></code> | <code>str</code> | Fully qualified name of the Snowflake Intelligence object to attach the agent to. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#id IntelligenceCortexAgentAttachment#id}. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cortex_agent_name`<sup>Required</sup> <a name="cortex_agent_name" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.cortexAgentName"></a>

```python
cortex_agent_name: str
```

- *Type:* str

Fully qualified name of the Cortex agent to attach.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using pipes (`|`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#cortex_agent_name IntelligenceCortexAgentAttachment#cortex_agent_name}

---

##### `snowflake_intelligence_name`<sup>Required</sup> <a name="snowflake_intelligence_name" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.snowflakeIntelligenceName"></a>

```python
snowflake_intelligence_name: str
```

- *Type:* str

Fully qualified name of the Snowflake Intelligence object to attach the agent to.

The account default object is SNOWFLAKE_INTELLIGENCE_OBJECT_DEFAULT. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using pipes (`|`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#snowflake_intelligence_name IntelligenceCortexAgentAttachment#snowflake_intelligence_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#id IntelligenceCortexAgentAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.timeouts"></a>

```python
timeouts: IntelligenceCortexAgentAttachmentTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#timeouts IntelligenceCortexAgentAttachment#timeouts}

---

### IntelligenceCortexAgentAttachmentTimeouts <a name="IntelligenceCortexAgentAttachmentTimeouts" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import intelligence_cortex_agent_attachment

intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#create IntelligenceCortexAgentAttachment#create}. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#delete IntelligenceCortexAgentAttachment#delete}. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#read IntelligenceCortexAgentAttachment#read}. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#update IntelligenceCortexAgentAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#create IntelligenceCortexAgentAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#delete IntelligenceCortexAgentAttachment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#read IntelligenceCortexAgentAttachment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/resources/intelligence_cortex_agent_attachment#update IntelligenceCortexAgentAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntelligenceCortexAgentAttachmentTimeoutsOutputReference <a name="IntelligenceCortexAgentAttachmentTimeoutsOutputReference" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import intelligence_cortex_agent_attachment

intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntelligenceCortexAgentAttachmentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a>

---



