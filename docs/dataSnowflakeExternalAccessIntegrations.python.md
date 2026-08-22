# `dataSnowflakeExternalAccessIntegrations` Submodule <a name="`dataSnowflakeExternalAccessIntegrations` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeExternalAccessIntegrations <a name="DataSnowflakeExternalAccessIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations snowflake_external_access_integrations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_access_integrations

dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  like: str = None,
  with_describe: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#id DataSnowflakeExternalAccessIntegrations#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC EXTERNAL ACCESS INTEGRATION for each integration returned by SHOW EXTERNAL ACCESS INTEGRATIONS. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#id DataSnowflakeExternalAccessIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.like"></a>

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#like DataSnowflakeExternalAccessIntegrations#like}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.withDescribe"></a>

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs DESC EXTERNAL ACCESS INTEGRATION for each integration returned by SHOW EXTERNAL ACCESS INTEGRATIONS.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#with_describe DataSnowflakeExternalAccessIntegrations#with_describe}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetLike">reset_like</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetWithDescribe">reset_with_describe</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_like` <a name="reset_like" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetLike"></a>

```python
def reset_like() -> None
```

##### `reset_with_describe` <a name="reset_with_describe" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetWithDescribe"></a>

```python
def reset_with_describe() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataSnowflakeExternalAccessIntegrations resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isConstruct"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_access_integrations

dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_access_integrations

dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformDataSource"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_access_integrations

dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_access_integrations

dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataSnowflakeExternalAccessIntegrations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSnowflakeExternalAccessIntegrations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSnowflakeExternalAccessIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeExternalAccessIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.externalAccessIntegrations">external_access_integrations</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.likeInput">like_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.withDescribeInput">with_describe_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.like">like</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `external_access_integrations`<sup>Required</sup> <a name="external_access_integrations" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.externalAccessIntegrations"></a>

```python
external_access_integrations: DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `like_input`<sup>Optional</sup> <a name="like_input" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.likeInput"></a>

```python
like_input: str
```

- *Type:* str

---

##### `with_describe_input`<sup>Optional</sup> <a name="with_describe_input" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.withDescribeInput"></a>

```python
with_describe_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.like"></a>

```python
like: str
```

- *Type:* str

---

##### `with_describe`<sup>Required</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeExternalAccessIntegrationsConfig <a name="DataSnowflakeExternalAccessIntegrationsConfig" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_access_integrations

dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  like: str = None,
  with_describe: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#id DataSnowflakeExternalAccessIntegrations#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC EXTERNAL ACCESS INTEGRATION for each integration returned by SHOW EXTERNAL ACCESS INTEGRATIONS. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#id DataSnowflakeExternalAccessIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.like"></a>

```python
like: str
```

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#like DataSnowflakeExternalAccessIntegrations#like}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs DESC EXTERNAL ACCESS INTEGRATION for each integration returned by SHOW EXTERNAL ACCESS INTEGRATIONS.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#with_describe DataSnowflakeExternalAccessIntegrations#with_describe}

---

### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_access_integrations

dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations()
```


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_access_integrations

dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput()
```


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_access_integrations

dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput()
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_access_integrations

dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_access_integrations

dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedApiAuthenticationIntegrations">allowed_api_authentication_integrations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedAuthenticationSecrets">allowed_authentication_secrets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedNetworkRules">allowed_network_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_api_authentication_integrations`<sup>Required</sup> <a name="allowed_api_authentication_integrations" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedApiAuthenticationIntegrations"></a>

```python
allowed_api_authentication_integrations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_authentication_secrets`<sup>Required</sup> <a name="allowed_authentication_secrets" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedAuthenticationSecrets"></a>

```python
allowed_authentication_secrets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_network_rules`<sup>Required</sup> <a name="allowed_network_rules" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedNetworkRules"></a>

```python
allowed_network_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput</a>

---


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_access_integrations

dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_access_integrations

dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.describeOutput"></a>

```python
describe_output: DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.showOutput"></a>

```python
show_output: DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations</a>

---


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_access_integrations

dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_external_access_integrations

dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput</a>

---



