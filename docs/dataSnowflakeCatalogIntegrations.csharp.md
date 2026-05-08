# `dataSnowflakeCatalogIntegrations` Submodule <a name="`dataSnowflakeCatalogIntegrations` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeCatalogIntegrations <a name="DataSnowflakeCatalogIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/catalog_integrations snowflake_catalog_integrations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeCatalogIntegrations(Construct Scope, string Id, DataSnowflakeCatalogIntegrationsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig">DataSnowflakeCatalogIntegrationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig">DataSnowflakeCatalogIntegrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.resetLike">ResetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.resetWithDescribe">ResetWithDescribe</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLike` <a name="ResetLike" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.resetLike"></a>

```csharp
private void ResetLike()
```

##### `ResetWithDescribe` <a name="ResetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.resetWithDescribe"></a>

```csharp
private void ResetWithDescribe()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeCatalogIntegrations resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeCatalogIntegrations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeCatalogIntegrations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeCatalogIntegrations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeCatalogIntegrations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataSnowflakeCatalogIntegrations resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeCatalogIntegrations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeCatalogIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/catalog_integrations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeCatalogIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.catalogIntegrations">CatalogIntegrations</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.likeInput">LikeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.withDescribeInput">WithDescribeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.like">Like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.withDescribe">WithDescribe</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CatalogIntegrations`<sup>Required</sup> <a name="CatalogIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.catalogIntegrations"></a>

```csharp
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsList CatalogIntegrations { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.likeInput"></a>

```csharp
public string LikeInput { get; }
```

- *Type:* string

---

##### `WithDescribeInput`<sup>Optional</sup> <a name="WithDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.withDescribeInput"></a>

```csharp
public bool|IResolvable WithDescribeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.like"></a>

```csharp
public string Like { get; }
```

- *Type:* string

---

##### `WithDescribe`<sup>Required</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.withDescribe"></a>

```csharp
public bool|IResolvable WithDescribe { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeCatalogIntegrationsCatalogIntegrations <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeCatalogIntegrationsCatalogIntegrations {

};
```


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput {

};
```


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication {

};
```


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication {

};
```


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig {

};
```


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication {

};
```


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput {

};
```


### DataSnowflakeCatalogIntegrationsConfig <a name="DataSnowflakeCatalogIntegrationsConfig" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeCatalogIntegrationsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    string Like = null,
    bool|IResolvable WithDescribe = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/catalog_integrations#id DataSnowflakeCatalogIntegrations#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.like">Like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.withDescribe">WithDescribe</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | (Default: `true`) Runs DESC CATALOG INTEGRATION for each catalog integration returned by SHOW CATALOG INTEGRATIONS. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/catalog_integrations#id DataSnowflakeCatalogIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.like"></a>

```csharp
public string Like { get; set; }
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/catalog_integrations#like DataSnowflakeCatalogIntegrations#like}

---

##### `WithDescribe`<sup>Optional</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsConfig.property.withDescribe"></a>

```csharp
public bool|IResolvable WithDescribe { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

(Default: `true`) Runs DESC CATALOG INTEGRATION for each catalog integration returned by SHOW CATALOG INTEGRATIONS.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/data-sources/catalog_integrations#with_describe DataSnowflakeCatalogIntegrations#with_describe}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.get"></a>

```csharp
private DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthentication</a>

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.get"></a>

```csharp
private DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.get"></a>

```csharp
private DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.oauthAllowedScopes">OauthAllowedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.oauthClientId">OauthClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.oauthTokenUri">OauthTokenUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OauthAllowedScopes`<sup>Required</sup> <a name="OauthAllowedScopes" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.oauthAllowedScopes"></a>

```csharp
public string[] OauthAllowedScopes { get; }
```

- *Type:* string[]

---

##### `OauthClientId`<sup>Required</sup> <a name="OauthClientId" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.oauthClientId"></a>

```csharp
public string OauthClientId { get; }
```

- *Type:* string

---

##### `OauthTokenUri`<sup>Required</sup> <a name="OauthTokenUri" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.oauthTokenUri"></a>

```csharp
public string OauthTokenUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthentication</a>

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.bearerRestAuthentication">BearerRestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.catalogNamespace">CatalogNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.catalogSource">CatalogSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.glueAwsRoleArn">GlueAwsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.glueCatalogId">GlueCatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.glueRegion">GlueRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.oauthRestAuthentication">OauthRestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.refreshIntervalSeconds">RefreshIntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.restConfig">RestConfig</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.sigv4RestAuthentication">Sigv4RestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.tableFormat">TableFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BearerRestAuthentication`<sup>Required</sup> <a name="BearerRestAuthentication" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.bearerRestAuthentication"></a>

```csharp
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList BearerRestAuthentication { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputBearerRestAuthenticationList</a>

---

##### `CatalogNamespace`<sup>Required</sup> <a name="CatalogNamespace" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.catalogNamespace"></a>

```csharp
public string CatalogNamespace { get; }
```

- *Type:* string

---

##### `CatalogSource`<sup>Required</sup> <a name="CatalogSource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.catalogSource"></a>

```csharp
public string CatalogSource { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `GlueAwsRoleArn`<sup>Required</sup> <a name="GlueAwsRoleArn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.glueAwsRoleArn"></a>

```csharp
public string GlueAwsRoleArn { get; }
```

- *Type:* string

---

##### `GlueCatalogId`<sup>Required</sup> <a name="GlueCatalogId" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.glueCatalogId"></a>

```csharp
public string GlueCatalogId { get; }
```

- *Type:* string

---

##### `GlueRegion`<sup>Required</sup> <a name="GlueRegion" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.glueRegion"></a>

```csharp
public string GlueRegion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OauthRestAuthentication`<sup>Required</sup> <a name="OauthRestAuthentication" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.oauthRestAuthentication"></a>

```csharp
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList OauthRestAuthentication { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOauthRestAuthenticationList</a>

---

##### `RefreshIntervalSeconds`<sup>Required</sup> <a name="RefreshIntervalSeconds" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.refreshIntervalSeconds"></a>

```csharp
public double RefreshIntervalSeconds { get; }
```

- *Type:* double

---

##### `RestConfig`<sup>Required</sup> <a name="RestConfig" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.restConfig"></a>

```csharp
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList RestConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList</a>

---

##### `Sigv4RestAuthentication`<sup>Required</sup> <a name="Sigv4RestAuthentication" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.sigv4RestAuthentication"></a>

```csharp
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList Sigv4RestAuthentication { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList</a>

---

##### `TableFormat`<sup>Required</sup> <a name="TableFormat" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.tableFormat"></a>

```csharp
public string TableFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutput</a>

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.get"></a>

```csharp
private DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.accessDelegationMode">AccessDelegationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.catalogApiType">CatalogApiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.catalogUri">CatalogUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessDelegationMode`<sup>Required</sup> <a name="AccessDelegationMode" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.accessDelegationMode"></a>

```csharp
public string AccessDelegationMode { get; }
```

- *Type:* string

---

##### `CatalogApiType`<sup>Required</sup> <a name="CatalogApiType" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.catalogApiType"></a>

```csharp
public string CatalogApiType { get; }
```

- *Type:* string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `CatalogUri`<sup>Required</sup> <a name="CatalogUri" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.catalogUri"></a>

```csharp
public string CatalogUri { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfigOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputRestConfig</a>

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.get"></a>

```csharp
private DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.sigv4IamRole">Sigv4IamRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.sigv4SigningRegion">Sigv4SigningRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Sigv4IamRole`<sup>Required</sup> <a name="Sigv4IamRole" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.sigv4IamRole"></a>

```csharp
public string Sigv4IamRole { get; }
```

- *Type:* string

---

##### `Sigv4SigningRegion`<sup>Required</sup> <a name="Sigv4SigningRegion" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.sigv4SigningRegion"></a>

```csharp
public string Sigv4SigningRegion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthenticationOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputSigv4RestAuthentication</a>

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsList <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsList" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.get"></a>

```csharp
private DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrations">DataSnowflakeCatalogIntegrationsCatalogIntegrations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.describeOutput"></a>

```csharp
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsDescribeOutputList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.showOutput"></a>

```csharp
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList">DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeCatalogIntegrationsCatalogIntegrations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrations">DataSnowflakeCatalogIntegrationsCatalogIntegrations</a>

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.get"></a>

```csharp
private DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference <a name="DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput">DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeCatalogIntegrations.DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput">DataSnowflakeCatalogIntegrationsCatalogIntegrationsShowOutput</a>

---



