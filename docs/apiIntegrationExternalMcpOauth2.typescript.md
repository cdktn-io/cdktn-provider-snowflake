# `apiIntegrationExternalMcpOauth2` Submodule <a name="`apiIntegrationExternalMcpOauth2` Submodule" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationExternalMcpOauth2 <a name="ApiIntegrationExternalMcpOauth2" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2 snowflake_api_integration_external_mcp_oauth2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer"></a>

```typescript
import { apiIntegrationExternalMcpOauth2 } from '@cdktn/provider-snowflake'

new apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2(scope: Construct, id: string, config: ApiIntegrationExternalMcpOauth2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config">ApiIntegrationExternalMcpOauth2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config">ApiIntegrationExternalMcpOauth2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetApiBlockedPrefixes">resetApiBlockedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetOauthClientAuthMethod">resetOauthClientAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetOauthRefreshTokenValidity">resetOauthRefreshTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.putTimeouts"></a>

```typescript
public putTimeouts(value: ApiIntegrationExternalMcpOauth2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a>

---

##### `resetApiBlockedPrefixes` <a name="resetApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetApiBlockedPrefixes"></a>

```typescript
public resetApiBlockedPrefixes(): void
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOauthClientAuthMethod` <a name="resetOauthClientAuthMethod" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetOauthClientAuthMethod"></a>

```typescript
public resetOauthClientAuthMethod(): void
```

##### `resetOauthRefreshTokenValidity` <a name="resetOauthRefreshTokenValidity" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetOauthRefreshTokenValidity"></a>

```typescript
public resetOauthRefreshTokenValidity(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApiIntegrationExternalMcpOauth2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isConstruct"></a>

```typescript
import { apiIntegrationExternalMcpOauth2 } from '@cdktn/provider-snowflake'

apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isTerraformElement"></a>

```typescript
import { apiIntegrationExternalMcpOauth2 } from '@cdktn/provider-snowflake'

apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isTerraformResource"></a>

```typescript
import { apiIntegrationExternalMcpOauth2 } from '@cdktn/provider-snowflake'

apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.generateConfigForImport"></a>

```typescript
import { apiIntegrationExternalMcpOauth2 } from '@cdktn/provider-snowflake'

apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApiIntegrationExternalMcpOauth2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiIntegrationExternalMcpOauth2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiIntegrationExternalMcpOauth2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationExternalMcpOauth2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList">ApiIntegrationExternalMcpOauth2DescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList">ApiIntegrationExternalMcpOauth2ShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference">ApiIntegrationExternalMcpOauth2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiAllowedPrefixesInput">apiAllowedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiBlockedPrefixesInput">apiBlockedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthAuthorizationEndpointInput">oauthAuthorizationEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientAuthMethodInput">oauthClientAuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientIdInput">oauthClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientSecretInput">oauthClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthRefreshTokenValidityInput">oauthRefreshTokenValidityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthTokenEndpointInput">oauthTokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthAuthorizationEndpoint">oauthAuthorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientAuthMethod">oauthClientAuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientId">oauthClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientSecret">oauthClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthRefreshTokenValidity">oauthRefreshTokenValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthTokenEndpoint">oauthTokenEndpoint</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.describeOutput"></a>

```typescript
public readonly describeOutput: ApiIntegrationExternalMcpOauth2DescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList">ApiIntegrationExternalMcpOauth2DescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.showOutput"></a>

```typescript
public readonly showOutput: ApiIntegrationExternalMcpOauth2ShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList">ApiIntegrationExternalMcpOauth2ShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.timeouts"></a>

```typescript
public readonly timeouts: ApiIntegrationExternalMcpOauth2TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference">ApiIntegrationExternalMcpOauth2TimeoutsOutputReference</a>

---

##### `apiAllowedPrefixesInput`<sup>Optional</sup> <a name="apiAllowedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiAllowedPrefixesInput"></a>

```typescript
public readonly apiAllowedPrefixesInput: string[];
```

- *Type:* string[]

---

##### `apiBlockedPrefixesInput`<sup>Optional</sup> <a name="apiBlockedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiBlockedPrefixesInput"></a>

```typescript
public readonly apiBlockedPrefixesInput: string[];
```

- *Type:* string[]

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `oauthAuthorizationEndpointInput`<sup>Optional</sup> <a name="oauthAuthorizationEndpointInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthAuthorizationEndpointInput"></a>

```typescript
public readonly oauthAuthorizationEndpointInput: string;
```

- *Type:* string

---

##### `oauthClientAuthMethodInput`<sup>Optional</sup> <a name="oauthClientAuthMethodInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientAuthMethodInput"></a>

```typescript
public readonly oauthClientAuthMethodInput: string;
```

- *Type:* string

---

##### `oauthClientIdInput`<sup>Optional</sup> <a name="oauthClientIdInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientIdInput"></a>

```typescript
public readonly oauthClientIdInput: string;
```

- *Type:* string

---

##### `oauthClientSecretInput`<sup>Optional</sup> <a name="oauthClientSecretInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientSecretInput"></a>

```typescript
public readonly oauthClientSecretInput: string;
```

- *Type:* string

---

##### `oauthRefreshTokenValidityInput`<sup>Optional</sup> <a name="oauthRefreshTokenValidityInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthRefreshTokenValidityInput"></a>

```typescript
public readonly oauthRefreshTokenValidityInput: number;
```

- *Type:* number

---

##### `oauthTokenEndpointInput`<sup>Optional</sup> <a name="oauthTokenEndpointInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthTokenEndpointInput"></a>

```typescript
public readonly oauthTokenEndpointInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApiIntegrationExternalMcpOauth2Timeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a>

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiAllowedPrefixes"></a>

```typescript
public readonly apiAllowedPrefixes: string[];
```

- *Type:* string[]

---

##### `apiBlockedPrefixes`<sup>Required</sup> <a name="apiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiBlockedPrefixes"></a>

```typescript
public readonly apiBlockedPrefixes: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oauthAuthorizationEndpoint`<sup>Required</sup> <a name="oauthAuthorizationEndpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthAuthorizationEndpoint"></a>

```typescript
public readonly oauthAuthorizationEndpoint: string;
```

- *Type:* string

---

##### `oauthClientAuthMethod`<sup>Required</sup> <a name="oauthClientAuthMethod" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientAuthMethod"></a>

```typescript
public readonly oauthClientAuthMethod: string;
```

- *Type:* string

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientId"></a>

```typescript
public readonly oauthClientId: string;
```

- *Type:* string

---

##### `oauthClientSecret`<sup>Required</sup> <a name="oauthClientSecret" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientSecret"></a>

```typescript
public readonly oauthClientSecret: string;
```

- *Type:* string

---

##### `oauthRefreshTokenValidity`<sup>Required</sup> <a name="oauthRefreshTokenValidity" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthRefreshTokenValidity"></a>

```typescript
public readonly oauthRefreshTokenValidity: number;
```

- *Type:* number

---

##### `oauthTokenEndpoint`<sup>Required</sup> <a name="oauthTokenEndpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthTokenEndpoint"></a>

```typescript
public readonly oauthTokenEndpoint: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationExternalMcpOauth2Config <a name="ApiIntegrationExternalMcpOauth2Config" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.Initializer"></a>

```typescript
import { apiIntegrationExternalMcpOauth2 } from '@cdktn/provider-snowflake'

const apiIntegrationExternalMcpOauth2Config: apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>string[]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.name">name</a></code> | <code>string</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthAuthorizationEndpoint">oauthAuthorizationEndpoint</a></code> | <code>string</code> | Specifies the OAuth 2.0 authorization endpoint URL for the MCP server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthClientId">oauthClientId</a></code> | <code>string</code> | Specifies the OAuth 2.0 client ID for the MCP server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthClientSecret">oauthClientSecret</a></code> | <code>string</code> | Specifies the OAuth 2.0 client secret for the MCP server. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthTokenEndpoint">oauthTokenEndpoint</a></code> | <code>string</code> | Specifies the OAuth 2.0 token endpoint URL for the MCP server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>string[]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#id ApiIntegrationExternalMcpOauth2#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthClientAuthMethod">oauthClientAuthMethod</a></code> | <code>string</code> | Specifies the OAuth 2.0 client authentication method. Valid values are (case-insensitive): `CLIENT_SECRET_BASIC` \| `CLIENT_SECRET_POST`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthRefreshTokenValidity">oauthRefreshTokenValidity</a></code> | <code>number</code> | Specifies the validity period (in seconds) for refresh tokens issued by the MCP server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.apiAllowedPrefixes"></a>

```typescript
public readonly apiAllowedPrefixes: string[];
```

- *Type:* string[]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#api_allowed_prefixes ApiIntegrationExternalMcpOauth2#api_allowed_prefixes}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#enabled ApiIntegrationExternalMcpOauth2#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#name ApiIntegrationExternalMcpOauth2#name}

---

##### `oauthAuthorizationEndpoint`<sup>Required</sup> <a name="oauthAuthorizationEndpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthAuthorizationEndpoint"></a>

```typescript
public readonly oauthAuthorizationEndpoint: string;
```

- *Type:* string

Specifies the OAuth 2.0 authorization endpoint URL for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_authorization_endpoint ApiIntegrationExternalMcpOauth2#oauth_authorization_endpoint}

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthClientId"></a>

```typescript
public readonly oauthClientId: string;
```

- *Type:* string

Specifies the OAuth 2.0 client ID for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_client_id ApiIntegrationExternalMcpOauth2#oauth_client_id}

---

##### `oauthClientSecret`<sup>Required</sup> <a name="oauthClientSecret" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthClientSecret"></a>

```typescript
public readonly oauthClientSecret: string;
```

- *Type:* string

Specifies the OAuth 2.0 client secret for the MCP server. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_client_secret ApiIntegrationExternalMcpOauth2#oauth_client_secret}

---

##### `oauthTokenEndpoint`<sup>Required</sup> <a name="oauthTokenEndpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthTokenEndpoint"></a>

```typescript
public readonly oauthTokenEndpoint: string;
```

- *Type:* string

Specifies the OAuth 2.0 token endpoint URL for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_token_endpoint ApiIntegrationExternalMcpOauth2#oauth_token_endpoint}

---

##### `apiBlockedPrefixes`<sup>Optional</sup> <a name="apiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.apiBlockedPrefixes"></a>

```typescript
public readonly apiBlockedPrefixes: string[];
```

- *Type:* string[]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#api_blocked_prefixes ApiIntegrationExternalMcpOauth2#api_blocked_prefixes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#comment ApiIntegrationExternalMcpOauth2#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#id ApiIntegrationExternalMcpOauth2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oauthClientAuthMethod`<sup>Optional</sup> <a name="oauthClientAuthMethod" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthClientAuthMethod"></a>

```typescript
public readonly oauthClientAuthMethod: string;
```

- *Type:* string

Specifies the OAuth 2.0 client authentication method. Valid values are (case-insensitive): `CLIENT_SECRET_BASIC` | `CLIENT_SECRET_POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_client_auth_method ApiIntegrationExternalMcpOauth2#oauth_client_auth_method}

---

##### `oauthRefreshTokenValidity`<sup>Optional</sup> <a name="oauthRefreshTokenValidity" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthRefreshTokenValidity"></a>

```typescript
public readonly oauthRefreshTokenValidity: number;
```

- *Type:* number

Specifies the validity period (in seconds) for refresh tokens issued by the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_refresh_token_validity ApiIntegrationExternalMcpOauth2#oauth_refresh_token_validity}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.timeouts"></a>

```typescript
public readonly timeouts: ApiIntegrationExternalMcpOauth2Timeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#timeouts ApiIntegrationExternalMcpOauth2#timeouts}

---

### ApiIntegrationExternalMcpOauth2DescribeOutput <a name="ApiIntegrationExternalMcpOauth2DescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutput.Initializer"></a>

```typescript
import { apiIntegrationExternalMcpOauth2 } from '@cdktn/provider-snowflake'

const apiIntegrationExternalMcpOauth2DescribeOutput: apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutput = { ... }
```


### ApiIntegrationExternalMcpOauth2ShowOutput <a name="ApiIntegrationExternalMcpOauth2ShowOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutput.Initializer"></a>

```typescript
import { apiIntegrationExternalMcpOauth2 } from '@cdktn/provider-snowflake'

const apiIntegrationExternalMcpOauth2ShowOutput: apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutput = { ... }
```


### ApiIntegrationExternalMcpOauth2Timeouts <a name="ApiIntegrationExternalMcpOauth2Timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.Initializer"></a>

```typescript
import { apiIntegrationExternalMcpOauth2 } from '@cdktn/provider-snowflake'

const apiIntegrationExternalMcpOauth2Timeouts: apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#create ApiIntegrationExternalMcpOauth2#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#delete ApiIntegrationExternalMcpOauth2#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#read ApiIntegrationExternalMcpOauth2#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#update ApiIntegrationExternalMcpOauth2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#create ApiIntegrationExternalMcpOauth2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#delete ApiIntegrationExternalMcpOauth2#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#read ApiIntegrationExternalMcpOauth2#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#update ApiIntegrationExternalMcpOauth2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationExternalMcpOauth2DescribeOutputList <a name="ApiIntegrationExternalMcpOauth2DescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer"></a>

```typescript
import { apiIntegrationExternalMcpOauth2 } from '@cdktn/provider-snowflake'

new apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.get"></a>

```typescript
public get(index: number): ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference <a name="ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer"></a>

```typescript
import { apiIntegrationExternalMcpOauth2 } from '@cdktn/provider-snowflake'

new apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.allowedPrefixes">allowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.apiProvider">apiProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.blockedPrefixes">blockedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAccessTokenValidity">oauthAccessTokenValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAllowedScopes">oauthAllowedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAssertionIssuer">oauthAssertionIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAuthorizationEndpoint">oauthAuthorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthClientAuthMethod">oauthClientAuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthClientId">oauthClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthGrant">oauthGrant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthRefreshTokenValidity">oauthRefreshTokenValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthTokenEndpoint">oauthTokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthUsername">oauthUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.userAuthType">userAuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutput">ApiIntegrationExternalMcpOauth2DescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedPrefixes`<sup>Required</sup> <a name="allowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.allowedPrefixes"></a>

```typescript
public readonly allowedPrefixes: string[];
```

- *Type:* string[]

---

##### `apiProvider`<sup>Required</sup> <a name="apiProvider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.apiProvider"></a>

```typescript
public readonly apiProvider: string;
```

- *Type:* string

---

##### `blockedPrefixes`<sup>Required</sup> <a name="blockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.blockedPrefixes"></a>

```typescript
public readonly blockedPrefixes: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `oauthAccessTokenValidity`<sup>Required</sup> <a name="oauthAccessTokenValidity" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAccessTokenValidity"></a>

```typescript
public readonly oauthAccessTokenValidity: number;
```

- *Type:* number

---

##### `oauthAllowedScopes`<sup>Required</sup> <a name="oauthAllowedScopes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAllowedScopes"></a>

```typescript
public readonly oauthAllowedScopes: string[];
```

- *Type:* string[]

---

##### `oauthAssertionIssuer`<sup>Required</sup> <a name="oauthAssertionIssuer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAssertionIssuer"></a>

```typescript
public readonly oauthAssertionIssuer: string;
```

- *Type:* string

---

##### `oauthAuthorizationEndpoint`<sup>Required</sup> <a name="oauthAuthorizationEndpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAuthorizationEndpoint"></a>

```typescript
public readonly oauthAuthorizationEndpoint: string;
```

- *Type:* string

---

##### `oauthClientAuthMethod`<sup>Required</sup> <a name="oauthClientAuthMethod" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthClientAuthMethod"></a>

```typescript
public readonly oauthClientAuthMethod: string;
```

- *Type:* string

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthClientId"></a>

```typescript
public readonly oauthClientId: string;
```

- *Type:* string

---

##### `oauthGrant`<sup>Required</sup> <a name="oauthGrant" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthGrant"></a>

```typescript
public readonly oauthGrant: string;
```

- *Type:* string

---

##### `oauthRefreshTokenValidity`<sup>Required</sup> <a name="oauthRefreshTokenValidity" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthRefreshTokenValidity"></a>

```typescript
public readonly oauthRefreshTokenValidity: number;
```

- *Type:* number

---

##### `oauthTokenEndpoint`<sup>Required</sup> <a name="oauthTokenEndpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthTokenEndpoint"></a>

```typescript
public readonly oauthTokenEndpoint: string;
```

- *Type:* string

---

##### `oauthUsername`<sup>Required</sup> <a name="oauthUsername" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthUsername"></a>

```typescript
public readonly oauthUsername: string;
```

- *Type:* string

---

##### `userAuthType`<sup>Required</sup> <a name="userAuthType" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.userAuthType"></a>

```typescript
public readonly userAuthType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiIntegrationExternalMcpOauth2DescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutput">ApiIntegrationExternalMcpOauth2DescribeOutput</a>

---


### ApiIntegrationExternalMcpOauth2ShowOutputList <a name="ApiIntegrationExternalMcpOauth2ShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer"></a>

```typescript
import { apiIntegrationExternalMcpOauth2 } from '@cdktn/provider-snowflake'

new apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.get"></a>

```typescript
public get(index: number): ApiIntegrationExternalMcpOauth2ShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiIntegrationExternalMcpOauth2ShowOutputOutputReference <a name="ApiIntegrationExternalMcpOauth2ShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer"></a>

```typescript
import { apiIntegrationExternalMcpOauth2 } from '@cdktn/provider-snowflake'

new apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.apiType">apiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutput">ApiIntegrationExternalMcpOauth2ShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiType`<sup>Required</sup> <a name="apiType" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.apiType"></a>

```typescript
public readonly apiType: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiIntegrationExternalMcpOauth2ShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutput">ApiIntegrationExternalMcpOauth2ShowOutput</a>

---


### ApiIntegrationExternalMcpOauth2TimeoutsOutputReference <a name="ApiIntegrationExternalMcpOauth2TimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.Initializer"></a>

```typescript
import { apiIntegrationExternalMcpOauth2 } from '@cdktn/provider-snowflake'

new apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiIntegrationExternalMcpOauth2Timeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a>

---



