# `dataSnowflakeCatalogIntegrations` Submodule <a name="`dataSnowflakeCatalogIntegrations` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeCatalogIntegrations <a name="DataSnowflakeCatalogIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/catalog_integrations snowflake_catalog_integrations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations(
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
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/catalog_integrations#id DataSnowflakeCatalogIntegrations#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC CATALOG INTEGRATION for each catalog integration returned by SHOW CATALOG INTEGRATIONS. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/catalog_integrations#id DataSnowflakeCatalogIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.like"></a>

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/catalog_integrations#like DataSnowflakeCatalogIntegrations#like}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.withDescribe"></a>

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs DESC CATALOG INTEGRATION for each catalog integration returned by SHOW CATALOG INTEGRATIONS.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/catalog_integrations#with_describe DataSnowflakeCatalogIntegrations#with_describe}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.resetLike">reset_like</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.resetWithDescribe">reset_with_describe</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_like` <a name="reset_like" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.resetLike"></a>

```python
def reset_like() -> None
```

##### `reset_with_describe` <a name="reset_with_describe" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.resetWithDescribe"></a>

```python
def reset_with_describe() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataSnowflakeCatalogIntegrations resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isConstruct"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isTerraformDataSource"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataSnowflakeCatalogIntegrations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSnowflakeCatalogIntegrations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSnowflakeCatalogIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/catalog_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeCatalogIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.catalogIntegrations">catalog_integrations</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.likeInput">like_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.withDescribeInput">with_describe_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.like">like</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `catalog_integrations`<sup>Required</sup> <a name="catalog_integrations" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.catalogIntegrations"></a>

```python
catalog_integrations: DataSnowflakeCatalogIntegrationsCatalogIntegrationsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `like_input`<sup>Optional</sup> <a name="like_input" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.likeInput"></a>

```python
like_input: str
```

- *Type:* str

---

##### `with_describe_input`<sup>Optional</sup> <a name="with_describe_input" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.withDescribeInput"></a>

```python
with_describe_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.like"></a>

```python
like: str
```

- *Type:* str

---

##### `with_describe`<sup>Required</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeCatalogIntegrationsCatalogIntegrations <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrations.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrations()
```


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput()
```


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication()
```


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication()
```


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig()
```


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication()
```


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput()
```


### DataSnowflakeCatalogIntegrationsConfig <a name="DataSnowflakeCatalogIntegrationsConfig" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig(
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
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/catalog_integrations#id DataSnowflakeCatalogIntegrations#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC CATALOG INTEGRATION for each catalog integration returned by SHOW CATALOG INTEGRATIONS. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/catalog_integrations#id DataSnowflakeCatalogIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.like"></a>

```python
like: str
```

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/catalog_integrations#like DataSnowflakeCatalogIntegrations#like}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs DESC CATALOG INTEGRATION for each catalog integration returned by SHOW CATALOG INTEGRATIONS.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/catalog_integrations#with_describe DataSnowflakeCatalogIntegrations#with_describe}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication</a>

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.oauthAllowedScopes">oauth_allowed_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.oauthClientId">oauth_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.oauthTokenUri">oauth_token_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oauth_allowed_scopes`<sup>Required</sup> <a name="oauth_allowed_scopes" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.oauthAllowedScopes"></a>

```python
oauth_allowed_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `oauth_client_id`<sup>Required</sup> <a name="oauth_client_id" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.oauthClientId"></a>

```python
oauth_client_id: str
```

- *Type:* str

---

##### `oauth_token_uri`<sup>Required</sup> <a name="oauth_token_uri" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.oauthTokenUri"></a>

```python
oauth_token_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication</a>

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.bearerRestAuthentication">bearer_rest_authentication</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.catalogNamespace">catalog_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.catalogSource">catalog_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.glueAwsRoleArn">glue_aws_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.glueCatalogId">glue_catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.glueRegion">glue_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.oauthRestAuthentication">oauth_rest_authentication</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.refreshIntervalSeconds">refresh_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.restConfig">rest_config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.sigv4RestAuthentication">sigv4_rest_authentication</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.tableFormat">table_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bearer_rest_authentication`<sup>Required</sup> <a name="bearer_rest_authentication" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.bearerRestAuthentication"></a>

```python
bearer_rest_authentication: DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList</a>

---

##### `catalog_namespace`<sup>Required</sup> <a name="catalog_namespace" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.catalogNamespace"></a>

```python
catalog_namespace: str
```

- *Type:* str

---

##### `catalog_source`<sup>Required</sup> <a name="catalog_source" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.catalogSource"></a>

```python
catalog_source: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `glue_aws_role_arn`<sup>Required</sup> <a name="glue_aws_role_arn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.glueAwsRoleArn"></a>

```python
glue_aws_role_arn: str
```

- *Type:* str

---

##### `glue_catalog_id`<sup>Required</sup> <a name="glue_catalog_id" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.glueCatalogId"></a>

```python
glue_catalog_id: str
```

- *Type:* str

---

##### `glue_region`<sup>Required</sup> <a name="glue_region" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.glueRegion"></a>

```python
glue_region: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `oauth_rest_authentication`<sup>Required</sup> <a name="oauth_rest_authentication" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.oauthRestAuthentication"></a>

```python
oauth_rest_authentication: DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList</a>

---

##### `refresh_interval_seconds`<sup>Required</sup> <a name="refresh_interval_seconds" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.refreshIntervalSeconds"></a>

```python
refresh_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rest_config`<sup>Required</sup> <a name="rest_config" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.restConfig"></a>

```python
rest_config: DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList</a>

---

##### `sigv4_rest_authentication`<sup>Required</sup> <a name="sigv4_rest_authentication" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.sigv4RestAuthentication"></a>

```python
sigv4_rest_authentication: DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList</a>

---

##### `table_format`<sup>Required</sup> <a name="table_format" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.tableFormat"></a>

```python
table_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput</a>

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.accessDelegationMode">access_delegation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.catalogApiType">catalog_api_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.catalogUri">catalog_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_delegation_mode`<sup>Required</sup> <a name="access_delegation_mode" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.accessDelegationMode"></a>

```python
access_delegation_mode: str
```

- *Type:* str

---

##### `catalog_api_type`<sup>Required</sup> <a name="catalog_api_type" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.catalogApiType"></a>

```python
catalog_api_type: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `catalog_uri`<sup>Required</sup> <a name="catalog_uri" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.catalogUri"></a>

```python
catalog_uri: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig</a>

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.sigv4IamRole">sigv4_iam_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.sigv4SigningRegion">sigv4_signing_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sigv4_iam_role`<sup>Required</sup> <a name="sigv4_iam_role" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.sigv4IamRole"></a>

```python
sigv4_iam_role: str
```

- *Type:* str

---

##### `sigv4_signing_region`<sup>Required</sup> <a name="sigv4_signing_region" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.sigv4SigningRegion"></a>

```python
sigv4_signing_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication</a>

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsList <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsList" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrations">DataSnowflakeCatalogIntegrationsCatalogIntegrations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.describeOutput"></a>

```python
describe_output: DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.showOutput"></a>

```python
show_output: DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeCatalogIntegrationsCatalogIntegrations
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrations">DataSnowflakeCatalogIntegrationsCatalogIntegrations</a>

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_catalog_integrations

dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput">DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput">DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput</a>

---



